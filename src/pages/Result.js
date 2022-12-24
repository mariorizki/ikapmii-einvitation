import {
  collection,
  doc,
  getDoc,
  increment,
  onSnapshot,
  query,
  updateDoc,
} from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { db } from '../firebase-config';
import RingLoader from 'react-spinners/RingLoader';

const Result = () => {
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'candidates'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let dataArr = [];
      querySnapshot.forEach((doc) => {
        dataArr.push({ ...doc.data(), id: doc.id });
      });
      setIsLoading(false);
      setCandidates(dataArr);
    });
    return () => unsubscribe();
  }, []);

  //   total voting
  let total = 0;

  for (let i in candidates) {
    total += candidates[i].count;
  }

  const chartData = {
    labels: candidates.map((candidate) => candidate.name),
    datasets: [
      {
        label: 'Count',
        data: candidates.map((candidate) => candidate.count),
        borderColor: '#3333ff',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
          },
        },
      },
    },
  };
  return (
    <>
      {isLoading ? (
        <div className="bg-[#060E31] text-center flex justify-center gap-5 items-center flex-col text-white">
          <div className="h-[100vh] flex justify-center items-center flex-col">
            <RingLoader size={150} color="#FFC93C" />
            <p className="text-[#FFC93C] text-2xl opacity-50 mt-4">
              Loading...
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full h-[100vh]  flex justify-center items-center">
          <div className="w-[320px] h-[90%] md:w-[700px]">
            <h1 className="text-lg font-bold">Hasil Vote</h1>
            <h1>Total suara masuk: {total}</h1>
            <Bar data={chartData} options={options} />
            <h1 className="mt-5">Details:</h1>
            <div className="mt-3">
              {candidates.map((candidate) => (
                <div className="flex justify-between">
                  <div>
                    <h1 className="my-1">{candidate.name}</h1>
                  </div>
                  <div>
                    <h1 className="my-1">{candidate.count} Suara</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;

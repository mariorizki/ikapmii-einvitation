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
import { useNavigate, useParams } from 'react-router';
import { db } from '../firebase-config';
import RingLoader from 'react-spinners/RingLoader';

const Vote = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const userRef = doc(db, 'users', id);

  const userFetchById = async () => {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      setLoading(false);
      setUser({ ...docSnap.data(), id: docSnap.id });
    }
  };

  useEffect(() => {
    userFetchById();
  }, []);

  //   fetch candidates
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

  console.log(candidates);

  //   form
  const [selectedOption, setSelectedOption] = useState('');

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  console.log(user);
  console.log(selectedOption);

  //   vote sumbit
  const navigate = useNavigate();

  const handleVoteSubmit = async (e) => {
    e.preventDefault();
    if (user.isVoted === true && selectedOption !== '') {
      alert('Kamu sudah memilih');
    } else {
      if (selectedOption !== '') {
        navigate('/submitvote');
        await updateDoc(doc(db, 'candidates', selectedOption), {
          count: increment(1),
        });
        await updateDoc(doc(db, 'users', id), {
          isVoted: true,
        });
      } else {
        alert('Pilih salah satu kandidat terlebih dahulu!');
      }
    }
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
        <div className="bg-[#060E31] text-white h-[100vh] w-full flex flex-col gap-3 justify-center items-center">
          <h1 className="text-xl text-center font-bold">
            Pilih Calon Ketua IKA PMII Komfapsi
          </h1>
          <form
            onSubmit={handleVoteSubmit}
            className="bg-[#0F1744] rounded-md p-5 w-[90%]"
          >
            {candidates?.map((candidate) => (
              <div key={candidate.id} className="mb-3">
                <input
                  type="radio"
                  value={candidate.id}
                  onChange={onValueChange}
                  checked={selectedOption === `${candidate.id}`}
                />
                <label className="m-3">{candidate.name}</label>
              </div>
            ))}
            <button className="outline-none text-md text-white font-medium py-2 px-3 mt-5 bg-amber-500  w-full rounded-md">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Vote;

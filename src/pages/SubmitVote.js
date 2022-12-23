import React from 'react';
import { useNavigate } from 'react-router';

const SubmitVote = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#060E31] text-white h-[100vh] w-full flex flex-col gap-3 justify-center items-center">
      <h1>Terima Kasih!</h1>
      <h1>Voting anda telah diproses</h1>
      <button
        onClick={() => navigate('/result')}
        className="outline-none text-md text-white font-medium py-2 px-3 mt-5 bg-amber-500  rounded-md"
      >
        Lihat hasil
      </button>
    </div>
  );
};

export default SubmitVote;

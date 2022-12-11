import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black h-[100vh] p-10 text-center">
      <h1 className="text-[#FFC93C] text-5xl">Reuni Akbar IKA-PMII Komfapsi</h1>
      <Link to="/invitation/YWVQWy6oHLq8cVhfWO5v">
        <p className="text-white">Hello</p>
      </Link>
    </div>
  );
};

export default Home;

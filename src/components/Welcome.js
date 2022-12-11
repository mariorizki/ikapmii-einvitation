import React from 'react';
import background from '../img/welcome-bg.jpg';

const Welcome = ({ name, setIsOpen, isOpen }) => {
  return (
    <div
      className={`bg-slate-900 text-white h-[100vh] flex flex-col justify-center  gap-5 fixed left-0 z-50 w-full items-center transition-all	 ease-in-out duration-[2000ms] ${
        isOpen ? 'top-0' : 'top-[-1000px]'
      }`}
      // style={{
      //   background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      // }}
    >
      <p className="uppercase tracking-widest">Join Us To</p>

      <h1 className="text-2xl font-bold">
        Reuni Akbar <br /> IKA-PMII Komfapsi
      </h1>
      <hr className="bg-[#FFC93C] w-24 -mt-1 mx-auto h-0.5 rounded border-0" />
      <p className="italic">"Recall Reconnect Reinforce"</p>
      {/* <img loading="lazy" src={require('../img/logo.png')} alt="" /> */}
      <h1 className="text-xl mt-4">Kepada Sahabat {name}</h1>
      <button
        onClick={() => setIsOpen(false)}
        className="outline-none text-md text-white font-medium py-2 px-3 bg-amber-500  mt-4 rounded-md"
      >
        Buka Undangan
      </button>
    </div>
  );
};

export default Welcome;

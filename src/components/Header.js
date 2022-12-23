import React from 'react';
import { useNavigate } from 'react-router';
import background from '../img/hero-bg.jpg';
import Countdown from './Countdown';

const Header = ({ name, gender, attendance, userId }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[100vh] w-full flex justify-around items-center flex-col p-5 text-white"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* <p>We Joyfully Invite You to This Event</p> */}
      <p className="mt-4 drop-shadow-lg">
        Assalamualaikum wr. wb. <br /> <br />
        Tanpa mengurangi rasa hormat, kami mengundang{' '}
        {gender.toLowerCase() === 'male' ? 'Sahabat ' : 'Sahabati '}
        <span className="font-bold text-amber-500">{name} </span> untuk
        menghadiri acara temu kangen akbar IKA (Ikatan Keluarga Alumni) PMII
        Komfapsi
      </p>
      {attendance === 'confirmed' ? (
        <button
          onClick={() => navigate(`/vote/${userId.id}`)}
          className="outline-none text-md text-white font-medium py-2 px-3 bg-amber-500  mt-4 rounded-md"
        >
          Voting Ketua IKA
        </button>
      ) : (
        ''
      )}
      <Countdown />
    </div>
  );
};

export default Header;

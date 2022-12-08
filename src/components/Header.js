import React from "react";

const Header = ({ name }) => {
  return (
    <div className="h-[100vh]">
      <p>We Joyfully Invite You to This Event</p>
      <p className="text-left mt-4">
        Assalamualaikum wr. wb. <br />
        Tanpa mengurangi rasa hormat, kami mengundang Sahabat {name} untuk
        menghadiri acara temu kangen akbar IKA Komfapsi
      </p>
    </div>
  );
};

export default Header;

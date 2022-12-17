import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <>
      <Zoom>
        <p className="mt-10">
          Merupakan suatu kehormatan dan kebanggaan bagi kami apabila sahabat/i
          berkenan hadir. Atas waktu dan kehadirannya kami ucapkan terima kasih.
        </p>
        <p>Wassalamualaikum Wr. Wb.</p>
      </Zoom>
      <div className="bg-[#0F1744] w-full p-2 mt-16">
        <p className="font-extrabold">Powered By Mario Rizki</p>
      </div>
    </>
  );
};

export default Footer;

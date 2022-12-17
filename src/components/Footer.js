import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <>
      <Zoom>
        <div className="p-7">
          <p className="mt-10 text-sm">
            Merupakan suatu kehormatan dan kebanggaan bagi kami apabila
            sahabat/i berkenan hadir. <br />
            <br />
            Atas waktu dan kehadirannya kami ucapkan terima kasih.
          </p>
          <p className="text-sm mt-2">Wassalamualaikum Wr. Wb.</p>
        </div>
      </Zoom>
      <div className="bg-[#0F1744] w-full p-2 mt-16">
        <p className="font-extrabold">Powered By Mario Rizki</p>
      </div>
    </>
  );
};

export default Footer;

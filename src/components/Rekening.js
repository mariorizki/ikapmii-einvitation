import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Rekening = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-7 mt-16">
      <p className="text-sm">
        Demi kelancaran acara kita bersama, bagi sahabat/i yang ingin memberikan
        donasi untuk acara ini dapat dikirimkan melalui:
      </p>
      <div className="bg-white p-2 rounded-md w-[200px]">
        <img src={require('../img/bca.png')} alt="" />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <p className="text-sm">No Rekening: 6042079797</p>
        <CopyToClipboard text="6042079797">
          <button className="bg-slate-700 p-1.5 rounded-md text-xs">
            Copy Number
          </button>
        </CopyToClipboard>
      </div>
      <p className="text-sm">A/n Mohammad Taufik Aziz</p>
    </div>
  );
};

export default Rekening;

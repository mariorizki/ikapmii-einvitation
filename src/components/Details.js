import React from 'react';
import { Zoom, Bounce } from 'react-awesome-reveal';
import Lottie from 'lottie-react';

const protocols = [
  { title: 'Cuci Tangan', img: 'p-1.png' },
  { title: 'Gunakan Masker', img: 'p-2.png' },
  { title: 'Menjaga Jarak', img: 'p-3.png' },
  { title: 'Hindari Kerumunan', img: 'p-4.png' },
  { title: 'Gunakan Handsanitizer', img: 'p-5.png' },
];

const Details = () => {
  return (
    <div className="p-7">
      <Zoom>
        <p className="mt-10">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
          ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>
      </Zoom>
      <Zoom>
        <p className="mt-10 text-sm">
          Dan diantara tanda - tanda kekuasaan-Nya ialah diciptakan-Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan
          hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
          demikian itu menjadi tanda - tanda kebesaran-Nya bagi orang - orang
          yang berfikir.
        </p>
      </Zoom>
      <Zoom>
        <div className="mt-16">
          <h1 className="text-3xl font-marck font-bold text-amber-500">
            Waktu
          </h1>
          <Lottie
            animationData={require('../lottie/calendar.json')}
            className="h-[50px]"
          />
        </div>
      </Zoom>
      <Zoom>
        <div className="mt-2">
          <p>Sabtu, 24 Desember 2022</p>
          <p>09:00 s/d selesai</p>
        </div>
      </Zoom>
      <Zoom>
        <div className="mt-16">
          <h1 className="text-3xl font-marck font-bold text-amber-500">
            Tempat
          </h1>
          <Lottie
            animationData={require('../lottie/location.json')}
            className="h-[40px]"
          />
        </div>
      </Zoom>
      <Zoom>
        <div className="mt-2">
          <p>Jl. TB Simatupang No.10, Cilandak</p>
          <p>Jakarta Selatan</p>
          <a
            href="https://www.google.com/maps/place/Jl.+TB+Simatupang+No.10,+RT.2%2FRW.2,+Cilandak+Tim.,+Ps.+Minggu,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12560/@-6.2947759,106.786673,16.5z/data=!4m5!3m4!1s0x2e69f1f88b39ab11:0x24edb8690a522fac!8m2!3d-6.2918941!4d106.8164195"
            target="_blank"
          >
            <button className="outline-none text-md text-white font-medium py-2 px-3 bg-amber-500  mt-4 rounded-md">
              Lihat Lokasi
            </button>
          </a>
        </div>
      </Zoom>
      <Zoom>
        <div className="mt-16">
          <h1 className="text-3xl font-marck font-bold text-amber-500">
            Protokol Kesehatan
          </h1>
          <p className="mt-5">
            Guna mencegah penyebaran Covid-19, diharapkan bagi sahabat/i untuk
            mematuhi protokol kesehatan:
          </p>
        </div>
      </Zoom>
      <div className="flex justify-center items-center flex-col gap-x-8 md:flex-row md:flex-wrap">
        {protocols.map((protocol) => (
          <Zoom key={protocol.title}>
            <div className="flex flex-col justify-center items-center gap-y-2 mt-10">
              <img
                className="w-[100px]"
                src={require(`../img/${protocol.img}`)}
                alt={protocol.img}
              />
              <p>{protocol.title}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Details;

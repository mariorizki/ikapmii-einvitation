import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
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
          <p className="text-3xl font-marck font-bold text-amber-500">Waktu</p>
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
          <p className="text-3xl font-marck font-bold text-amber-500">Tempat</p>
          <Lottie
            animationData={require('../lottie/location.json')}
            className="h-[40px]"
          />
        </div>
      </Zoom>
      <Zoom>
        <div className="mt-2">
          <p>Jl. TB SImatupang No.10, Kec Cilandak</p>
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
    </div>
  );
};

export default Details;

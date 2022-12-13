import React from 'react';
import { Zoom, Bounce } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import Rekening from './Rekening';

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
        <p className="text-sm mt-5">
          قَالَ الشَّيْخُ عَبْدُ اللهِ فِكْرِيْ بَاشَا (المُتَوَفَّى سَنَةَ ۱٢۰٧
          هـ <br /> Syeikh Abdullah Fikri Basya (Wafat 1207 H)
        </p>
        <p className="mt-10 text-sm">
          إِذَا نَامَ غِرٌّ فِـي دُجَى اللَّيْلِ فَاسْهَرْ # وَقُمْ لِلْمَعَالِي
          وَالعَوَالِـي وَشَمِّرِ وَسَارِعْ إِلىَ مَا رُمْتَ مَا دُمْتَ قَادِرًا
          # عَلَيْهِ فَإِنْ لَـمْ تُبْصِرِ النُجْحَ فَاصْبِرِ وَأَكْثِرْ مِنَ
          الشُوْرَى فَإِنَّكَ إِنْ تُصِبْ # تَجِدْ مَـادِحًا أَوْ تُخْطِئِ
          الرَأْيَ تُعْذَرِ وَعَوِّدْ مَقَالَ الصِدْقِ نَفْسَكَ وَارْضَهُ #
          تُصَدَّقْ وَلَا تَرْكَنْ إِلـىَ قَوْلِ مُفْتَرِ وَلَا تَقْفُ زَلَّاتِ
          العِبَــادِ تَعُدُّهَا # فَلَسْتَ عَلَـى هَذَا الوَرَى بِمُسَيْطِرِ
        </p>
      </Zoom>
      <Zoom>
        <p className="mt-10 text-xs">
          Tatkala para pemuda lain tidur di malam yang kelam maka bangunlah
          engkau. <br /> <br /> Bangunlah demi kemuliaan dan kejayaan, serta
          singsingkanlah lengan bajumu. <br /> <br /> Segeralah menuju apa yang
          kau dambakan selagi kau mampu melakukannya. Adapun jika kau belum
          menemukan kesuksesan maka bersabarlah. <br /> <br /> Perbanyaklah
          musyawarah karena jika kau benar, kau akan mendapatkan pujian, atau
          kalau pun salah, kau akan dimaklumi. Biasakanlah dirimu untuk berkata
          benar, dan cintailah perkataan benar. <br />
          <br /> Kau akan dipercaya, dan janganlah condong kepada perkataan
          dusta. Janganlah mengikuti kesalahan orang lain dan
          menghitung-hitungnya. Karena kau bukanlah penguasa atas manusia.
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
            className="h-[40px] mt-2"
          />
        </div>
      </Zoom>
      <Zoom>
        <div className="mt-2">
          <p>Jl. TB Simatupang No.10, Cilandak</p>
          <p>Jakarta Selatan</p>
          <a
            href="https://www.google.com/maps/place/Restoran+Surgana+Rasa/@-6.3226423,106.6818635,19.25z/data=!4m13!1m7!3m6!1s0x2e69e5222585d333:0xd48ec748fd7cadb4!2sJl.+Raya+Rawa+Buntu+No.18,+Rw.+Buntu,+Kec.+Serpong,+Kota+Tangerang+Selatan,+Banten+15318!3b1!8m2!3d-6.322345!4d106.682703!3m4!1s0x2e69e57317a4c099:0xaeb263898d927de4!8m2!3d-6.322108!4d106.6825808"
            target="_blank"
          >
            <button className="outline-none text-md text-white font-medium py-2 px-3 bg-amber-500  mt-4 rounded-md">
              Lihat Lokasi
            </button>
          </a>
        </div>
      </Zoom>
      <Zoom>
        <Rekening />
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
              <p className="text-sm">{protocol.title}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Details;

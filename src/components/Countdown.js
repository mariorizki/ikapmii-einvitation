import React, { useRef, useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const Countdown = () => {
  const [daysTimer, setDayTimer] = useState();
  const [hoursTimer, setHoursTimer] = useState();
  const [minutesTimer, setMinutesTimer] = useState();
  const [secondsTimer, setSecondsTimer] = useState();

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('December 24, 2022 09:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        //   Stop timer
        clearInterval(interval.current);
      } else {
        //   update timer
        setDayTimer(days);
        setHoursTimer(hours);
        setMinutesTimer(minutes);
        setSecondsTimer(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div>
      <h1 className="text-3xl font-marck font-bold text-amber-500">
        Countdown
      </h1>
      <div className=" text-center gap-x-2 grid grid-cols-4 ">
        <section className="bg-[#ffffff10] rounded-lg p-2 text-center backdrop-opacity-30 shadow-2xl">
          <p>{daysTimer}</p>
          <p className="text-xs">Days</p>
        </section>

        <section className="bg-[#ffffff10] rounded-lg p-2 text-center backdrop-opacity-30 shadow-2xl">
          <p>{hoursTimer}</p>
          <p className="text-xs">Hours</p>
        </section>

        <section className="bg-[#ffffff10] rounded-lg p-2 text-center backdrop-opacity-30 shadow-2xl">
          <p>{minutesTimer}</p>
          <p className="text-xs">Minutes</p>
        </section>

        <section className="bg-[#ffffff10] rounded-lg p-2 text-center backdrop-opacity-30 shadow-2xl">
          <p>{secondsTimer}</p>
          <p className="text-xs">Seconds</p>
        </section>
      </div>
    </div>
  );
};

export default Countdown;

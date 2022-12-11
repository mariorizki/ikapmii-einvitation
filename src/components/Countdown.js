import React, { useRef, useState, useEffect } from 'react';

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
    <div className="bg-[#ffffff10] text-center backdrop-opacity-30 shadow-2xl rounded-lg p-4 grid grid-cols-7 ">
      <section>
        <p>{daysTimer}</p>
        <p className="text-sm">Days</p>
      </section>
      <span className="text-3xl">:</span>
      <section>
        <p>{hoursTimer}</p>
        <p className="text-sm">Hours</p>
      </section>
      <span className="text-3xl">:</span>
      <section>
        <p>{minutesTimer}</p>
        <p className="text-sm">Minutes</p>
      </section>
      <span className="text-3xl">:</span>
      <section>
        <p>{secondsTimer}</p>
        <p className="text-sm">Seconds</p>
      </section>
    </div>
  );
};

export default Countdown;

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Timer } from '../Timer/Timer';

export const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const target = moment(targetDate);
      const duration = moment.duration(target.diff(now));

      setTimeRemaining({
        years: duration.years(),
        months: duration.months(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <Timer time={timeRemaining.months + timeRemaining.years * 12} typeOfTime="months" />
      <Timer time={timeRemaining.days} typeOfTime="days" />
      <Timer time={timeRemaining.hours} typeOfTime="hours" />
      <Timer time={timeRemaining.minutes} typeOfTime="minutes" />
      <Timer time={timeRemaining.seconds} typeOfTime="seconds" />
    </div>
  );
};

import React from 'react';

interface Props {
  time: number;
  typeOfTime: string;
}

export const Timer: React.FC<Props> = ({ time, typeOfTime }) => (
  <div className="timer">
    <div className="timer__time">{time}</div>
    <div className="timer__type-of-time">{typeOfTime}</div>
  </div>
);

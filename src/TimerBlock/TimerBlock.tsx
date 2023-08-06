import React from 'react';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';

const targetDate = '2024-12-31T00:00:00';

export const TimerBlock = () => (
  <div className="timer-block">
    <div className="timer-block__title">
      The Day Our Dreams Come True: Our Countdown Begins
    </div>
    <CountdownTimer targetDate={targetDate} />
  </div>
);

import React from 'react';
import { TimerBlock } from '../TimerBlock/TimerBlock';
import { Skill } from '../Skill/Skill';

// eslint-disable-next-line @typescript-eslint/no-use-before-define
const points = getPoints();

export const Main = () => (
  <div className="main">
    <TimerBlock />
    <Skill title="Time" points={points.time} imagePath="time.svg" />
    <Skill title="sport" points={points.sport} imagePath="sport.svg" />
    <Skill title="English" points={points.english} imagePath="english.svg" />
    <Skill title="communication" points={points.Communication} imagePath="communication.svg" />
  </div>
);

function getPoints() {
  return {
    time: ['Embrace the art of prioritization and focus on activities that align with your goals, allowing you to make meaningful progress in both personal and professional spheres.', 'In the pursuit of greatness, seek balance between ambition and inner peace, work and play, ambition and contentment. Cultivate harmony in your life.'],
    sport: [
      'Regular physical activity improves your productivity throughout the day',
      'Boosts your immune system, enhances sleep quality, and increases your appetite for nutritious food, leading to better health.'],
    english: [
      'Consider joining speaking clubs to fluently converse with native speakers. Fluency is essential for working in the European market.',
      'Practice speaking with foreigners through platforms like langclub.live or speakingclub.com. Alternatively, you can ask ChatGPT or use Google for language practice. Improving your language skills will be beneficial for both career opportunities and living abroad.'],
    Communication: [
      'Communication is key to a successful life.',
      'want happiness in relationship - become truly best freiend to you spouse, its only possible with good communication',
      'want dream job - befriend interviewer, use all your communication skill to convince that although you not fit by hard skill for this position you still will be their best choice',
      'Foster deep connections with friends like those depicted in "How I Met Your Mother" through effective communication.',
      'Improved communication helps in handling customer interactions and managing coworkers more efficiently.',
    ],
  };
}

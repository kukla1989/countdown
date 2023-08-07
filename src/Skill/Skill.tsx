import React from 'react';
import classNames from 'classnames';

interface Props {
  title: string;
  points: string[];
  imagePath: string;
}

export const Skill: React.FC<Props> = ({ title, points, imagePath }) => {
  const isLarge = points.join().length > 270;

  return (
    <div className={classNames('skill', {
      'skill--large': isLarge,
    })}
    >
      <div className="skill__title">{title}</div>
      <div className="skill__main">
        <img src={`/imgs/${imagePath}`} alt={title} className="skill__img" />

        <div className="skill__points">
          {points.map(point => (
            <div className="skill__point" key={point}>{point}</div>
          ))}
        </div>
      </div>

    </div>
  );
};

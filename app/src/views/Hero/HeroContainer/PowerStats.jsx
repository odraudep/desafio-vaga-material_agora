import React from 'react';
import { toPropercase } from '@utils/stringFormatter';

const statsColors = {
  intelligence: '#006699',
  strength: '#990500',
  speed: '#009914',
  durability: '#610099',
  power: '#997d00',
  combat: '#1c0099',
};

function HeroContainerPowerStats({ hero }) {
  return (
    <li>
      <h3>Power Stats</h3>

      <ul className="max-w-3xl">
        {Object.keys(hero.powerstats).map((stat) => (
          <li key={`${hero.name} - ${stat}`}>
            <h4>
              {toPropercase(stat)}
              :
            </h4>
            <div className="w-100 h-4 rounded overflow-hidden bg-neutral-500">
              <div
                className="h-full bg-neutral-600"
                style={{
                  width: `${hero.powerstats[stat]}%`,
                  backgroundColor: statsColors[stat],
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default HeroContainerPowerStats;

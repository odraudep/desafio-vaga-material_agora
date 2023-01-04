import React from 'react';
import { toPropercase, checkForArrayToStr } from '@utils/stringFormatter';

function HeroContainerStatListItem({ config: { hero, title, prop } }) {
  return (
    <li>
      <h3>{title}</h3>

      <ul className="list-labels">
        {Object.keys(hero[prop]).map((heroProp) => (
          <li key={heroProp}>
            <h4>
              {toPropercase(heroProp.replace('-', ' '))}
              :
            </h4>
            <span>{checkForArrayToStr(hero[prop][heroProp]).replace('null', '-')}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default HeroContainerStatListItem;

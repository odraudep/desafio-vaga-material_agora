import React from 'react';
import HeroContainerStatListItem from './StatListItem';
import HeroContainerPowerStats from './PowerStats';
import HeroContainerHeading from './Heading';

const heroStats = [
  {
    title: 'Biography', prop: 'biography',
  },
  {
    title: 'Appearance', prop: 'appearance',
  },
  {
    title: 'Work', prop: 'work',
  },
  {
    title: 'Connections', prop: 'connections',
  },
];

function HeroContainer({ hero }) {
  return (
    <div className="flex gap-8">
      <div className="lg:min-w-[480px] lg:max-w-[480px]">
        <img src={hero.image.url} alt={hero.name} className="max-h-[640px]" />
      </div>

      <div className="flex-1">
        <HeroContainerHeading hero={hero} />

        <h2>Stats:</h2>
        <ul className="flex flex-col gap-8">
          <HeroContainerPowerStats hero={hero} />

          {heroStats.map((heroStat) => (
            <HeroContainerStatListItem
              key={heroStat.prop}
              config={{ hero, title: heroStat.title, prop: heroStat.prop }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeroContainer;

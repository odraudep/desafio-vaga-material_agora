import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { heroFetch } from '@config/axios';
import HeroCard from '@components/HeroCard';
import HeroContainer from './HeroContainer';

function Hero() {
  const [hero, setHero] = useState();
  const [heroes, setHeroes] = useState([]);
  const [isHeroesLoading, setIsHeroesLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchHero = async () => {
      const { data } = await heroFetch.get(`/${id}`);

      setHero(data);
    };

    setIsHeroesLoading(true);

    const fetchHeroes = async () => {
      const { data: { results } } = await heroFetch.get(`/?offset=${Number(id) + 2}&limit=${4}`);

      setHeroes(results);
      setIsHeroesLoading(false);
    };

    fetchHero();
    fetchHeroes();
  }, [id]);

  return (
    <div>
      {hero ? (
        <div>
          <HeroContainer hero={hero} />

          <hr className="my-8" />

          <div>
            <h2>Suggested Heroes:</h2>

            {!isHeroesLoading ? (
              <ul className="grid gap-8 mt-8 lg:grid-cols-4 md:grid-cols-2">
                {heroes.map((heroesItem) => (
                  <li key={`suggested_hero-${heroesItem.id}`}>
                    <HeroCard hero={heroesItem} />
                  </li>
                ))}
              </ul>
            ) : (
              <AiOutlineLoading3Quarters
                size="4rem"
                className="animate-spin mx-auto"
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Hero;

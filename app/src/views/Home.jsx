import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { heroFetch } from '@config/axios';
import HeroCard from '@components/HeroCard';

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setHeroes([]);
    const fetchHeroes = async () => {
      for (let count = 1; count <= 20; count++) {
        const { data } = await heroFetch.get(`/${count}`);

        setHeroes((prev) => [...prev, { ...data }]);
      }

      setIsLoading(false);
    };

    fetchHeroes();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <ul className="grid grid-cols-5 gap-4">
          {heroes.map((hero) => (
            <li key={hero.id}>
              <HeroCard hero={hero} />
            </li>
          ))}
        </ul>
      ) : (
        <AiOutlineLoading3Quarters size="4rem" className="animate-spin mx-auto" />
      )}
    </div>
  );
}

export default Home;

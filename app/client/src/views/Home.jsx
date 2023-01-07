import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { heroFetch } from '@config/axios';
import HeroCard from '@components/HeroCard';

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [heroesOffset, setHeroesOffset] = useState(1);
  const [loadMore, setLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const timeToFetchMoreHeroes = useRef(null);

  const fetchHeroes = async () => {
    const limit = 10;

    const { data: { results } } = await heroFetch.get(`/?offset=${heroesOffset}&limit=${limit}`);

    setHeroes((prev) => [...prev, ...results]);

    setHeroesOffset(heroesOffset + limit);
    setIsLoading(false);
    setLoadMore(true);
  };

  useEffect(() => {
    fetchHeroes();

    return () => {
      setHeroesOffset(1);
      setHeroes([]);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timeToFetchMoreHeroes.current) {
        clearTimeout(timeToFetchMoreHeroes.current);
      }

      const isScrollEnd = window.scrollY + window.innerHeight >= document.body.scrollHeight;

      if (isScrollEnd && loadMore) {
        setIsLoading(true);
        setLoadMore(false);
        timeToFetchMoreHeroes.current = setTimeout(() => fetchHeroes(heroesOffset), 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeToFetchMoreHeroes.current);
    };
  }, [heroesOffset]);

  return (
    <div>
      {heroes.length > 0 ? (
        <ul className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">
          {heroes.map((hero) => (
            <li key={hero.id}>
              <HeroCard hero={hero} />
            </li>
          ))}
        </ul>
      ) : null}

      {isLoading ? (
        <AiOutlineLoading3Quarters
          size="4rem"
          className="animate-spin mt-4 mx-auto"
        />
      ) : null}
    </div>
  );
}

export default Home;

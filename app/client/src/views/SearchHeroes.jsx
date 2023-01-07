import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { heroFetch } from '@config/axios';
import HeroCard from '@components/HeroCard';

function SearchHeroes() {
  const [heroes, setHeroes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { searchName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHeroes = async () => {
      const { data } = await heroFetch.get(`/search/${searchName}`);

      if (!data.results) {
        toast.error('Any hero was found.');
        return navigate('/');
      }

      setHeroes(data.results);

      setIsLoading(false);
    };

    fetchHeroes();
  }, [searchName]);

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
        <AiOutlineLoading3Quarters
          size="4rem"
          className="animate-spin mx-auto"
        />
      )}
    </div>
  );
}

export default SearchHeroes;

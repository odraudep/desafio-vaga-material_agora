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
      try {
        const { data } = await heroFetch.get(`/search/${searchName}`);

        if (data.response === 'error') {
          throw new Error('Any hero was found.');
        }

        setHeroes(data.results);

        setIsLoading(false);
      } catch (err) {
        toast.error(err.message);
        navigate('/');
      }
    };

    fetchHeroes();
  }, [searchName]);

  return (
    <div>
      {!isLoading ? (
        <ul className="grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2">
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

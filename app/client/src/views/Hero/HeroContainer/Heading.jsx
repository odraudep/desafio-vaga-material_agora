import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function HeroContainerHeading({ hero }) {
  return (
    <div className="flex justify-between items-center flex-wrap gap-8 mb-12 sm:flex-nowrap">
      <h1 className="mb-0">{hero.name}</h1>

      <div className="flex justify-center gap-2 w-full sm:w-auto">
        <Link
          to={`/hero/${hero.id <= 1 ? 1 : hero.id - 1}`}
          className="btn btn--primary btn--only-icon"
        >
          <AiOutlineArrowLeft size="1.25rem" />
        </Link>

        <Link
          to={`/hero/${Number(hero.id) + 1}`}
          className="btn btn--primary btn--only-icon"
        >
          <AiOutlineArrowRight size="1.25rem" />
        </Link>
      </div>
    </div>
  );
}

export default HeroContainerHeading;

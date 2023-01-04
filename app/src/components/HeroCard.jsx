import React from 'react';
import { Link } from 'react-router-dom';

function HeroCard({ hero }) {
  return (
    <Link
      to={`/hero/${hero.id}`}
      className="block overflow-hidden rounded shadow bg-zinc-800 opacity-80 transition-opacity hover:opacity-100"
    >
      <img src={hero.image.url} alt={`${hero.name}`} />
      <div className="px-4 py-2">
        <h3>{hero.name}</h3>
      </div>
    </Link>
  );
}

export default HeroCard;

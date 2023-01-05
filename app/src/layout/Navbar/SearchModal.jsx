import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchModal({ closeEvent }) {
  const [heroName, setHeroName] = useState();
  const navigate = useNavigate();
  const searchField = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    searchField.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search-heroes/${heroName}`);
    closeEvent();
  };

  const closeModal = (e) => {
    if (e.target !== e.currentTarget) return;

    closeEvent();
  };

  return (
    <div
      className="grid place-items-center fixed inset-0 z-30 bg-black/90"
      ref={modal}
      onClick={closeModal}
    >
      <form className="w-full max-w-lg px-4 py-12 rounded bg-slate-800 shadow" onSubmit={handleSubmit}>
        <label htmlFor="heroSearch" className="flex-1">
          <span className="block mb-1 font-medium text-xl">Search hero for:</span>
          <input
            type="text"
            placeholder="Type here the name of the hero..."
            id="heroSearch"
            className="form-control w-full"
            ref={searchField}
            onChange={(e) => setHeroName(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn--primary mt-4 mx-auto w-full">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchModal;

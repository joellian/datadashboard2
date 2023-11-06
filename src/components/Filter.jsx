import React from 'react';
import './Filter.css';

const Filter = ({ selectedGenre, handleGenreSelect }) => {
  return (
    <div className="filter">
      <label htmlFor="genreSelect">Filter by genre:</label>
      <select id="genreSelect" value={selectedGenre} onChange={handleGenreSelect}>
        <option value="">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Nonfiction">Nonfiction</option>
      </select>
    </div>
  );
};

export default Filter;

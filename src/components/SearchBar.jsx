import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [term, setTerm] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(term);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    );
  };
  export default SearchBar;
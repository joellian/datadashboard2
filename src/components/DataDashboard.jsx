import React, { useEffect, useState } from 'react';
import List from './List';
import SearchBar from './SearchBar'
import './DataDashboard.css';

const DataDashboard = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://openlibrary.org/search.json?title=${searchTerm}`);
      const data = await response.json();
      setBooks(data.docs);
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };


  const totalBooks = books.length;

let avgPublicationYear = 0;
if (totalBooks > 0) {
  avgPublicationYear = books.reduce((total, book) => total + (book.first_publish_year || 0), 0) / totalBooks;
}

let languageCounts = {};
let mostCommonLanguage = '';
if (totalBooks > 0) {
  languageCounts = books.reduce((counts, book) => ({ ...counts, [book.language]: (counts[book.language] || 0) + 1 }), {});
  mostCommonLanguage = Object.keys(languageCounts).reduce((a, b) => languageCounts[a] > languageCounts[b] ? a : b);
}

  return (
    <div className="data-dashboard">
      <h2>Please Enter a Book Selection:</h2>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="summary-statistics">
        <p>Total Books: {totalBooks}</p>
        <p>Average Year of Publication: {Math.round(avgPublicationYear)}</p>
        <p>Most Common Language: {mostCommonLanguage}</p>
      </div>
      <div className="book-list">
        <List books={books} />
      </div>
    </div>
  );
};

export default DataDashboard;


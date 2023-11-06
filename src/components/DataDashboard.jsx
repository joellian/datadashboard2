import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import './DataDashboard.css';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const DataDashboard = ({ searchTerm, clearSearch }) => {
  const [books, setBooks] = useState([]);

const clearBooks = () => {
    setBooks([]);
  };
  const [selectedGenre, setSelectedGenre] = useState('');  
  const handleGenreSelect = (event) => {
    setSelectedGenre(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://openlibrary.org/search.json?title=${searchTerm}`);
      const data = await response.json();
      let fetchedBooks = data.docs;
  
     
      if (selectedGenre) {
        fetchedBooks = fetchedBooks.filter(book => book.subject && book.subject.includes(selectedGenre));
      }
  
      setBooks(fetchedBooks);
    };
  
    if (searchTerm) {
      fetchData();
    } else {
      clearBooks();
    }
  }, [searchTerm, selectedGenre]); 

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
  <div className="dashboard-and-filter">
    {books.length > 0 && (
      <>
        <Filter selectedGenre={selectedGenre} handleGenreSelect={handleGenreSelect} />
        <button onClick={clearSearch}>Dashboard</button>
      </>
    )}
  </div>
      <div className="summary-statistics">
        <p>Total Books: {totalBooks}</p>
        <p>Average Year of Publication: {Math.round(avgPublicationYear)}</p>
        <p>Most Common Language: {mostCommonLanguage}</p>
      </div>
      {books.map((book, index) => (
      <BookList book={book} key={book.edition_key || book.lccn || index} />
      ))}

  </div>
  );
};

export default DataDashboard;



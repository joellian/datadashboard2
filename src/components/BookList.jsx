import React from 'react';
import Card from './Card';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <Card key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
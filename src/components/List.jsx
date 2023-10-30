import React from 'react';
import Card from './Card';
import './List.css';

const List = ({ books }) => {
  return (
    <div className="list">
      {books.map(book => (
        <Card key={book.key} book={book} />
      ))}
    </div>
  );
};

export default List;
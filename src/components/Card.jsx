import React from 'react';
import './Card.css';

const Card = ({ book }) => {
  
  const firstISBN = book.isbn && book.isbn.length > 0 ? book.isbn[0] : 'N/A';
  const coverImageUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;

  return (
    <div className="card">
      <h2>{book.title}</h2>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      {book.cover_i && (
        <img
          src={coverImageUrl}
          alt={book.title}
          className="book-cover"
          style={{ maxWidth: '100%', height: 'auto' }}  
        />
      )}
    </div>
  );
};

export default Card;

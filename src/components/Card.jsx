import React from 'react';
import './Card.css';

const Card = ({ book }) => {
  
  const firstISBN = book.isbn && book.isbn.length > 0 ? book.isbn[0] : 'N/A';


  const coverImageUrl = `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;

  return (
    <div className="card">
      <h2>{book.title}</h2>
      <p>{book.first_publish_year}</p>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p>ISBN: {firstISBN}</p>
      <p>Language: {book.language ? book.language.join(', ') : 'Unknown'}</p>
      <p>Subject: {book.subject ? book.subject.join(', ') : 'N/A'}</p>
      <p>Publisher: {book.publisher ? book.publisher.join(', ') : 'N/A'}</p>

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

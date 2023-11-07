import React from 'react';
import Card from './Card';
import './BookList.css';
import { Link } from 'react-router-dom';

const BookList = ({ book }) => {

  const title = book.title;
  const coverId = book.cover_i;
  const authorName = book.author_name ? book.author_name[0] : 'Unknown';
  const firstPublishYear = book.first_publish_year || 'N/A';

  const coverImageUrl = `http://covers.openlibrary.org/b/id/${coverId}-M.jpg`;

  return (
    <Link to={`/book/works/${book.cover_edition_key}`}>
      <div>
        <img src={coverImageUrl} alt={`Cover of ${title}`} />
        <h2>{title}</h2>
        <p>Author: {authorName}</p>
        <p>First Published: {firstPublishYear}</p>
      </div>
    </Link>
  );
};

export default BookList;

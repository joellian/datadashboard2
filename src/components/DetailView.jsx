
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css'; 

const DetailView = () => {
  const { key } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`https://openlibrary.org/works/${key}.json`);
      const data = await response.json();
      setBookDetails(data);
    };

    fetchBookDetails();
  }, [key]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  const coverUrl = bookDetails.covers ? `https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg` : '';
  const authorName = bookDetails.authors ? bookDetails.authors[0].name : 'Unknown';
  const publishers = bookDetails.publishers ? bookDetails.publishers.join(', ') : 'N/A';
  const description = typeof bookDetails.description === 'string' ? bookDetails.description : bookDetails.description?.value || 'N/A';

  return (
    <div className="detail-view-container">
      <h2 className="book-title">{bookDetails.title}</h2>
      <img src={coverUrl} alt="Book Cover" className="book-cover" />
      <p className="book-info">Author: {authorName}</p>
      <p className="book-info">Publisher: {publishers}</p>
      <p className="book-description">Description: {description}</p>
    </div>
  );
};

export default DetailView;

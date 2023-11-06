
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailView = () => {
  const { key } = useParams();
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`http://openlibrary.org/works/${key}.json`);
      const data = await response.json();
      setBookDetails(data);
    };

    fetchBookDetails();
  }, [key]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <p>Author: {bookDetails.authors ? bookDetails.authors[0].name : 'Unknown'}</p>
      <p>Publisher: {bookDetails.publishers ? bookDetails.publishers.join(', ') : 'N/A'}</p>
      <p>Description: {bookDetails.description ? bookDetails.description.value : 'N/A'}</p>
      // Add more fields as needed
    </div>
  );
};

export default DetailView;

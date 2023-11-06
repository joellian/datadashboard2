import DataDashboard from './components/DataDashboard';
import Header from './components/Header';
import Graph from './components/Graph';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DetailView from './components/DetailView';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const clearSearch = () => {
    setSearchTerm('');
  };

  const [bookData, setBookData] = useState([]);
  const [nonFictionData, setNonFictionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:tolkien');
        const data = await response.json();

        if (data.items) {
          const bookData = data.items.map(item => item.volumeInfo.averageRating || 0); // Use 0 as the default value if "averageRating" is not present
          setBookData(bookData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const fetchNonFictionData = async () => {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=inauthor:tolkien+subject:non-fiction');
      const data = await response.json();

      if (data.items) {
        const nonFictionData = data.items.map(item => item.volumeInfo.averageRating || 0);
        setNonFictionData(nonFictionData);
      }
    };

    fetchNonFictionData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header handleSearch={handleSearch} />
        <Routes>
          <Route path="/book/:key" element={<DetailView />} />
          <Route
            path="/"
            element={
              <>
                {searchTerm ? (
                  <DataDashboard searchTerm={searchTerm} clearSearch={clearSearch} />
                ) : (
                  <>
                    <Graph data={bookData} title="Average Book Ratings" />
                    <Graph data={nonFictionData} title="Average Ratings for Non-Fiction Books" />
                  </>
                )}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

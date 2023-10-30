import React from 'react';
import DataDashboard from './components/DataDashboard';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <DataDashboard />
    </div>
  );
}

export default App;
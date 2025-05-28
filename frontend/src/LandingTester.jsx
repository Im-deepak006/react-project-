// src/LandingTester.jsx

import React, { useState } from 'react';

// Import your pages/components here
import Home from './App.jsx';
import About from './AboutUs.jsx';
import Faq  from './FAQ.jsx';

const LandingTester = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'faq':
        return <Faq />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('about')}>About</button>
        <button onClick={() => setPage('faq')}>faq</button>
      </div>
      <hr />
      {renderPage()}
    </div>
  );
};

export default LandingTester;

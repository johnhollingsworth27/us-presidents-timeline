// src/App.js

import React from 'react';
import CarouselComponent from './components/Carousel';
import Grid from './components/Grid';
import './App.css'; // Ensure this CSS file exists for global styling

function App() {
  return (
    <div className="App">
      <header>
        <h1>U.S. Presidents Timeline</h1>
      </header>
      <main>
        <CarouselComponent />
        <Grid />
      </main>
      <footer>
        <p>© 2024 U.S. Presidents Timeline</p>
      </footer>
    </div>
  );
}

export default App;

// src/components/Grid.js

import React from 'react';
import presidents from '../data/presidents';
import './Grid.css'; // Create this CSS file for styling

const Grid = () => {
  return (
    <div className="grid-container">
      <h2>Presidents Grid</h2>
      <div className="grid">
        {presidents.map(president => (
          <div key={president.id} className="grid-item">
            <img src={president.image} alt={president.name} className="grid-image" />
            <p>{president.name}</p>
            <p>{president.term}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;

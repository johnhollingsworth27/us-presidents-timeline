// src/components/PresidentCard.js

import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './PresidentCard.css'; // Create this CSS file for styling

const PresidentCard = ({ president }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div className="card front" onClick={handleClick} key="front">
        <img src={president.image} alt={president.name} className="president-image" />
        <h3>{president.name}</h3>
        <p><strong>Party:</strong> {president.party}</p>
        <p><strong>Previous:</strong></p>
        <ul>
          {president.previousPositions.map((position, index) => (
            <li key={index}>{position}</li>
          ))}
        </ul>
      </div>

      {/* Back of the card */}
      <div className="card back" onClick={handleClick} key="back">
        <h3>{president.name}'s Advisors</h3>
        <p><strong>Secretary of State:</strong> {president.advisors.secretaryOfState}</p>
        <p><strong>Secretary of Defense:</strong> {president.advisors.secretaryOfDefense}</p>
        <p><strong>Secretary of the Treasury:</strong> {president.advisors.secretaryOfTreasury}</p>
        <p><strong>Director of CIA:</strong> {president.advisors.directorOfCIA}</p>
        <p><strong>Director of National Intelligence:</strong> {president.advisors.directorOfNationalIntelligence}</p>
        <p className="flip-note">Click to flip back</p>
      </div>
    </ReactCardFlip>
  );
};

export default PresidentCard;

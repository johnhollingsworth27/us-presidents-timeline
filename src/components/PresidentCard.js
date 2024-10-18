import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './PresidentCard.css'; // Ensure this CSS file includes necessary styles

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
        <p className="president-term">{president.term}</p>
        <p className="president-id">President #{president.id}</p>
        <p><strong>Party:</strong> {president.party}</p>
      </div>

      {/* Back of the card */}
      <div className="card back" onClick={handleClick} key="back">
        <h3>{president.name}'s Advisors</h3>
        <p><strong>Secretary of State:</strong> {president.advisors.secretaryOfState}</p>
        <p><strong>Secretary of Defense:</strong> {president.advisors.secretaryOfDefense}</p>
        <p><strong>Secretary of the Treasury:</strong> {president.advisors.secretaryOfTreasury}</p>
        <p><strong>Director of CIA:</strong> {president.advisors.directorOfCIA}</p>
        <p><strong>Director of National Intelligence:</strong> {president.advisors.directorOfNationalIntelligence}</p>
        {/* <h4>Previous Positions</h4>
        <ul>
          {president.previousPositions.map((position, index) => (
            <li key={index}>{position}</li>
          ))}
        </ul>
        <p className="flip-note">Click to flip back</p> */}
      </div>
    </ReactCardFlip>
  );
};

export default PresidentCard;

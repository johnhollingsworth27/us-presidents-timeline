// src/components/PresidentList.js
import React from 'react';
import PresidentCard from './PresidentCard';
import './PresidentList.css'; // Create this CSS file

const PresidentList = ({ presidents }) => {
  return (
    <div className="president-list">
      {presidents.map((president, index) => (
        <PresidentCard key={index} president={president} />
      ))}
    </div>
  );
};

export default PresidentList;

import React from 'react';
import '../styles/YachtCard.css';

const YachtCard = ({ yacht }) => {
  return (
    <div className="yacht-card">
      <img src={`http://localhost:5000/${yacht.image}`} alt={yacht.name} />
      <h3>{yacht.name}</h3>
      <p>{yacht.location}</p>
      <p>{yacht.guests} guests</p>
      <p>${yacht.price} per hour</p>
    </div>
  );
};

export default YachtCard;

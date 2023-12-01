// PublishCard.js
import React from 'react';
import './PublishCard.css';

const PublishCard = () => {
 return (
    <div className="card-container">
      <div className="card-header">Ride Details</div>
      <div className="card-body">
        <div className="card-info">
          <div className="card-label">Start:</div>
          <div className="card-content">Your starting location</div>
        </div>
        <div className="card-info">
          <div className="card-label">Destination:</div>
          <div className="card-content">Your destination</div>
        </div>
        <div className="card-info">
          <div className="card-label">Taxi Number:</div>
          <div className="card-content">ABC123</div>
        </div>
        <div className="card-info">
          <div className="card-label">Time:</div>
          <div className="card-content">12:30 PM</div>
        </div>
      </div>
    </div>
 );
};

export default PublishCard;
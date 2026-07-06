import React from 'react';
import './LocationItem.css';

export default function LocationItem({ title, address }) {
  return (
    <div className="location-card">
      <div className="location-info">
        <div className="location-icon"></div>
        
        <div className="location-texts">
          <h4 className="location-title">{title}</h4>
          <p className="location-address">{address}</p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import './ParticipantItem.css';

export default function ParticipantItem({ name, station }) {
  const initial = name ? name.charAt(0) : '';

  return (
    <div className="participant-card">
      {/* 이제 name의 첫 글자가 자동으로 여기에 들어갑니다 */}
      <div className="participant-avatar">
        {initial}
      </div>
      
      <div className="participant-info">
        <h4 className="participant-name">{name}</h4>
        <p className="participant-station">{station}</p>
      </div>
    </div>
  );
}
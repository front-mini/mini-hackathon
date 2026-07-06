import React from 'react';
import './ParticipantItem.css';

export default function ParticipantItem({ initial, name, station }) {
  return (
    <div className="participant-card">
      {/* 동그란 프로필 영역 */}
      <div className="participant-avatar">
        {initial}
      </div>
      
      {/* 텍스트 영역 */}
      <div className="participant-info">
        <h4 className="participant-name">{name}</h4>
        <p className="participant-station">{station}</p>
      </div>
    </div>
  );
}
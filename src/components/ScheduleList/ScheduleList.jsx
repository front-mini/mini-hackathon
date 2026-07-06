import React from 'react';
import './ScheduleList.css';

export default function AppointmentItem({ label, value }) {
  return (
    <div className="appointment-card">
      {/* 아이콘 자리*/}
      <div className="appointment-icon-wrapper">
      </div>


      <div className="appointment-info">
        <span className="appointment-label">{label}</span>
        <span className="appointment-value">{value}</span>
      </div>
    </div>
  );
}
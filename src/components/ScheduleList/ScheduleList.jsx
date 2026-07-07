import { React, useState } from 'react';
import './ScheduleList.css';

export default function AppointmentItem({ icon, title, placeholder, type }) {
  return (
    <div className="appointment-card">
      <img src={icon} alt="icon" />
      <div className="appointment-info">
        <p className="appointment-label">{title}</p>
        <input type={type} className="appointment-value" placeholder={placeholder} />
      </div>
    </div>
  );
}
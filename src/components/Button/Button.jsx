import React from 'react';
import './Button.css';

export default function Button({ text, variant = 'blue' }) {
  // variant
  return (
    <button className={`custom-btn ${variant}`}>
      {text}
    </button>
  );
}
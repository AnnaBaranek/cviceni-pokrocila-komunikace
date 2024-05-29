import { useState } from 'react';
import './style.css';

export const SwitchButton = ({ label }) => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <button className="switch-button switch-button--on">
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};

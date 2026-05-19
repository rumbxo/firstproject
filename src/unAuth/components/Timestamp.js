import React from 'react';
import './Timestamp.css';

const Timestamp = () => {
  const now = new Date().toLocaleString();

  return (
    <div className="timestamp">
      <p>Page rendered at:</p>
      <strong>{now}</strong>
    </div>
  );
};

export default Timestamp;

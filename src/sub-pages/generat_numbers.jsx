import React, { useState } from 'react';
import '../styles/generate_number.css';

export default function  NumberPrinter () {
  const [number, setNumber] = useState('');
  const [numbersList, setNumbersList] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { 
      setNumber(value);
    }
  };

  const handleSubmit = () => {
    const n = parseInt(number, 10);
    if (!isNaN(n) && n > 0) {
      const nums = Array.from({ length: n }, (_, i) => i + 1);
      setNumbersList(nums);
    } else {
      setNumbersList([]);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="title">Print Numbers from 1 to N</div>

        <input
          type="text"
          className="input main-input"
          placeholder="Enter a number (N)"
          value={number}
          onChange={handleInputChange}
        />

        <button className="button" onClick={handleSubmit}>
          Print Numbers
        </button>

        <div className="result tiles-container">
          {numbersList.map((num) => (
            <div key={num} className="number-tile">
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



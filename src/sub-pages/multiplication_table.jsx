import React, { useState } from 'react';
import '../styles/generate_number.css';

export default function NumberPrinter() {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const handleGenerate = () => {
    if (!number) return;
    const num = parseInt(number, 10);
    let results = [];
    for (let i = 1; i <= 15; i++) {
      results.push([i, "x", num, "=", i * num]);
    }
    setTable(results);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Multiplication Table of N</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="input main-input"
        />
        <button onClick={handleGenerate} className="button">
          Print Table
        </button>

        <div className="result">
          {table.map((row, idx) => (
            <div key={idx} className="multiplication-row">
              {row.map((tile, i) => (
                <div key={i} className="multiplication-tile">
                  {tile}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

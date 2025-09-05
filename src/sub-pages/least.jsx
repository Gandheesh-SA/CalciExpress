import React, { useState } from "react";
import "../styles/sum_mul.css";

export default function Least() {
  const [count, setCount] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [least, setLeast] = useState(null);

  const handleCountChange = (e) => {
    const value = e.target.value;
    setCount(value);

    if (value !== "" && !isNaN(value)) {
      setNumbers(Array(Number(value)).fill(""));
      setLeast(null);
    } else {
      setNumbers([]);
    }
  };

  const handleNumberChange = (index, value) => {
    const updated = [...numbers];
    updated[index] = value;
    setNumbers(updated);
  };

  const findLeast = () => {
    const numericValues = numbers.map((n) => Number(n || 0));
    const max = Math.max(...numericValues);
    setLeast(max);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Find Least of N Numbers</h2>

        <input
          type="number"
          value={count}
          onChange={handleCountChange}
          placeholder="How many numbers?"
          className="input main-input"
        />

        <div style={{ marginTop: "20px" }}>
          {numbers.map((value, index) => (
            <input
              key={index}
              type="number"
              value={value}
              onChange={(e) => handleNumberChange(index, e.target.value)}
              placeholder={`Enter number ${index + 1}`}
              className="input"
            />
          ))}
        </div>

        {numbers.length > 0 && (
          <button className="button" onClick={findLeast}>
            Find Least
          </button>
        )}

        {least !== null && (
          <p className="result">
            Least number is: <strong>{least}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

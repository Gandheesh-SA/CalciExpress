import React, { useState } from "react";
import "../styles/sum_mul.css";

export default function Sum_General() {
  const [count, setCount] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(null);

  const handleCountChange = (e) => {
    const value = e.target.value;
    setCount(value);

    if (value !== "" && !isNaN(value)) {
      setNumbers(Array(Number(value)).fill(""));
      setSum(null);
    } else {
      setNumbers([]);
    }
  };

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  const calculateSum = () => {
    const total = numbers.reduce((acc, num) => acc + Number(num || 0), 0);
    setSum(total);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sum Calculator</h2>

        <input
          type="number"
          placeholder="How many numbers to add?"
          value={count}
          onChange={handleCountChange}
          className="input main-input"
        />

        <div className="inputs-container">
          {numbers.map((num, i) => (
            <input
              key={i}
              type="number"
              value={num}
              onChange={(e) => handleNumberChange(i, e.target.value)}
              placeholder={`Enter number ${i + 1}`}
              className="input"
            />
          ))}
        </div>

        {numbers.length > 0 && (
          <button onClick={calculateSum} className="button">
            Calculate
          </button>
        )}

        {sum !== null && (
          <p className="result">
            <strong>Sum =</strong> {sum}
          </p>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import "../styles/natural.css";

export default function Natural() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = () => {
    if (number !== "") {
      const n = parseInt(number, 10);
      if (n < 1) {
        setResult("Please enter a positive natural number.");
        return;
      }
      setResult((n * (n + 1)) / 2); 
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sum of Natural Numbers</h2>

        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            if (e.target.value === "") {
              setResult(null);
            }
          }}
          placeholder="Enter a natural number"
          className="input main-input"
        />

        <button onClick={handleClick} className="button">
          Calculate
        </button>

        {result !== null && (
          <p className="result">
            {isNaN(result) ? result : `Sum = ${result}`}
          </p>
        )}
      </div>
    </div>
  );
}

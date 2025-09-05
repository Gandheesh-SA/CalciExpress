import { useState } from "react";
import "../styles/armstrong.css";

export default function Armstrong() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const onHandleClick = () => {
    if (number !== "") {
      let temp = parseInt(number, 10);
      let sum = 0;
      while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** 3;
        temp = parseInt(temp / 10);
      }

      if (sum === parseInt(number, 10)) {
        setResult("an Armstrong Number");
      } else {
        setResult("not an Armstrong Number");
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Armstrong Number Checker</h2>

        <input
          type="number"
          value={number}
          onChange={(e) => {
            const value = e.target.value;
            setNumber(value);
            if (value === "") {
              setResult(null);
            }
          }}
          placeholder="Enter a number"
          className="input main-input"
        />

        <button onClick={onHandleClick} className="button">
          Check
        </button>

        {number !== "" && result !== null && (
          <p className="result">
            <strong>{number}</strong> is {result}
          </p>
        )}
      </div>
    </div>
  );
}

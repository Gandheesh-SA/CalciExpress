import { useState } from "react";
import "../styles/factorial.css";

export default function Factorial() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  const onHandleClick = () => {
    if (number !== "") {
      let n = parseInt(number, 10);
      if (n < 0) {
        setResult("Undefined (factorial of negative number doesn't exist)");
        return;
      }

      let sum = 1;
      for (let i = 2; i <= n; i++) {
        sum *= i;
      }
      setResult(sum);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Factorial Calculator</h2>

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
          Calculate
        </button>

        {number !== "" && result !== null && (
          <p className="result">
            Factorial of <strong>{number}</strong> is: <strong>{result}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

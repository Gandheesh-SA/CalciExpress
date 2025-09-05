import React from "react";
import { useState } from "react";
import "../styles/sum_mul.css";

export default function Multiply() {
  const [count, setCount] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [product, setProduct] = useState(null);

  const handleCountChange =(e) =>{
    const value = e.target.value;
    setCount(value);

    if (value!=="" && !isNaN(value)) {
        setNumbers(Array(Number(value)).fill(""));
        setProduct(null);
    } else{
        setNumbers([]);
    }
  }

  const handleNumberChange =(index,value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  }

   const calculateProduct = () => {
    const total = numbers.reduce((acc, num) => acc * Number(num || 1), 1);
    setProduct(total);
  };

  return (
     <div className="container">
      <div className="card">
        <h2 className="title">Product Calculator</h2>

        <input
          type="number"
          placeholder="How many numbers to multiply?"
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
          <button onClick={calculateProduct} className="button">
            Calculate
          </button>
        )}

        {product !== null && (
          <p className="result">
            <strong>Sum =</strong> {product}
          </p>
        )}
      </div>
    </div>
  );
}

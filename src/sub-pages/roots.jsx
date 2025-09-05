import React, { useState } from "react";
import "../styles/roots.css";

export default function Roots() {
  const [values, setValues] = useState({ a: "", b: "", c: "" });
  const [result, setResult] = useState({ r1: "", r2: "" });

  const handleClick = () => {
    const { a, b, c } = values;
    if (a !== "" && b !== "" && c !== "") {
      const a1 = parseFloat(a);
      const b1 = parseFloat(b);
      const c1 = parseFloat(c);

      const d = b1 * b1 - 4 * a1 * c1;

      if (d > 0) {
        const root1 = ((-b1 + Math.sqrt(d)) / (2 * a1)).toFixed(3);
        const root2 = ((-b1 - Math.sqrt(d)) / (2 * a1)).toFixed(3);
        setResult({ r1: root1, r2: root2 });
      } else if (d === 0) {
        const root = (-b1 / (2 * a1)).toFixed(3);
        setResult({ r1: root, r2: root });
      } else {
        const real = (-b1 / (2 * a1)).toFixed(3);
        const imag = (Math.sqrt(-d) / (2 * a1)).toFixed(3);
        setResult({
          r1: `${real} + ${imag}i`,
          r2: `${real} - ${imag}i`,
        });
      }
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Quadratic Roots Calculator</h2>

        <input
          type="number"
          value={values.a}
          onChange={(e) => setValues({ ...values, a: e.target.value })}
          placeholder="Enter coefficient a"
          className="input"
        />

        <input
          type="number"
          value={values.b}
          onChange={(e) => setValues({ ...values, b: e.target.value })}
          placeholder="Enter coefficient b"
          className="input"
        />

        <input
          type="number"
          value={values.c}
          onChange={(e) => setValues({ ...values, c: e.target.value })}
          placeholder="Enter constant c"
          className="input"
        />

        <button onClick={handleClick} className="button">
          Calculate
        </button>

        {result.r1 && result.r2 && (
          <p className="result">
            <strong>Roots:</strong> {result.r1} and {result.r2}
          </p>
        )}
      </div>
    </div>
  );
}

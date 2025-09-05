import { useState } from "react";
import "../styles/sum_mul.css";

export default function InterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("1"); // Times compounded per year

  const [simpleInterest, setSimpleInterest] = useState(null);
  const [compoundInterest, setCompoundInterest] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);
    const N = parseInt(frequency);

    if (isNaN(P) || isNaN(R) || isNaN(T) || isNaN(N) || P <= 0 || R <= 0 || T <= 0) {
      alert("Please enter valid positive numbers for all fields.");
      return;
    }

    const SI = (P * R * T) / 100;
    const CI = P * Math.pow(1 + R / (100 * N), N * T) - P;

    setSimpleInterest(SI.toFixed(2));
    setCompoundInterest(CI.toFixed(2));
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Interest Calculator</h2>

        <input
          type="number"
          placeholder="Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="input"
        />

        <input
          type="number"
          placeholder="Rate of Interest (%)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="input"
        />

        <input
          type="number"
          placeholder="Time (in years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input"
        />

        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="input"
        >
          <option value="1">Compounded Annually</option>
          <option value="2">Compounded Semi-Annually</option>
          <option value="4">Compounded Quarterly</option>
          <option value="12">Compounded Monthly</option>
          <option value="365">Compounded Daily</option>
        </select>

        <button onClick={calculateInterest} className="button">
          Calculate
        </button>

        {simpleInterest !== null && compoundInterest !== null && (
          <div className="result" style={{ marginTop: "20px" }}>
            <p><strong>Simple Interest:</strong> ₹{simpleInterest}</p>
            <p><strong>Compound Interest:</strong> ₹{compoundInterest}</p>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Header from "../components/header";
import "../styles/string.css";

export default function Strings() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  // Handlers for different operations
  const handleOperation = (operation) => {
    let res = "";
    switch (operation) {
      case "words":
        res = `Word Count: ${text.trim().split(/\s+/).filter(Boolean).length}`;
        break;
      case "chars":
        res = `Character Count: ${text.length}`;
        break;
      case "reverse":
        res = text.split("").reverse().join("");
        break;
      case "upper":
        res = text.toUpperCase();
        break;
      case "lower":
        res = text.toLowerCase();
        break;
      case "capitalise":
        res = text
          .toLowerCase()
          .replace(/\b\w/g, (c) => c.toUpperCase());
        break;
      case "title":
        res = text
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
          break;
      case "swapcase":
        res = text
          .split("")
          .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
          .join("");
          break;
    
      case "spaces":
        res = text.replace(/\s+/g, "");
        break;
      case "array":
        res = JSON.stringify(text.split(""));
        break;
      default:
        res = "";
    }
    setResult(res);
  };

  return (
    <>
      <Header
        title="STRING"
        para="Input a text or a paragraph and perform string operations on it."
      />

      <div className="string-container">
        {/* Result Box */}
        <div className="string-header">
          <p>{result || "Your result will appear here..."}</p>
        </div>

        {/* Input Area */}
        <div className="string-input">
          <p className="instruction">Enter your text or paragraph below:</p>
          <textarea
            className="string-textarea"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        {/* Operation Buttons */}
        <div className="string-buttons">
          <button onClick={() => handleOperation("words")}>Count Words</button>
          <button onClick={() => handleOperation("chars")}>Count Characters</button>
          <button onClick={() => handleOperation("reverse")}>Reverse Text</button>
          <button onClick={() => handleOperation("upper")}>Uppercase</button>
          <button onClick={() => handleOperation("lower")}>Lowercase</button>
          <button onClick={() => handleOperation("capitalise")}>Capitalise</button>
           <button onClick={() => handleOperation("title")}>Title</button>
          <button onClick={() => handleOperation("swapcase")}>SwapCase</button>
          <button onClick={() => handleOperation("spaces")}>Remove Spaces</button>
          <button onClick={() => handleOperation("array")}>Convert to Array Characters</button>
        </div>
      </div>
    </>
  );
}

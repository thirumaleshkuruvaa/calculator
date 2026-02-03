import React, { useState } from "react";
import Keypad from "./Keypad";
import "./Calculator.css";

function CalculatorApp() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="container">
      <h1>Calculator App</h1>

      <input
        type="text"
        value={input}
        className="output"
        readOnly
        placeholder="0"
      />

      <Keypad
        handleClick={handleClick}
        handleClear={handleClear}
        calculate={calculate}
      />
    </div>
  );
}

export default CalculatorApp;

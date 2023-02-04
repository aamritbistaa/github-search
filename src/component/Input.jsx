import React, { useState } from "react";
import "../index.css";

const Input = ({ sendData }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData(input);
    setInput("");
  };
  return (
    <div className="InputContainer">
      <div className="InputContainer-Wrapper">
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setInput(e.target.value)} value={input} />
          <button onClick={handleSubmit}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Input;

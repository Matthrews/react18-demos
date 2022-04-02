import React, { useState, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React will render twice, once for each state update (no batching)
    }, 1000);
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
}

function LogEvents() {
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

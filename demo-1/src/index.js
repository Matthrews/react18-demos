import { useState, useLayoutEffect } from "react";
import * as ReactDOMClient from "react-dom/client";

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

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(<App />);

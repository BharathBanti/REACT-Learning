import { useState } from "react";

export default function Counter({ id, onRemove, version }) {
  const [count, setCount] = useState(0);

  console.log("Rendering Counter:", id);

  return (
    <div className="card">
      <h3>Counter {id}</h3>
      <p>{count}</p>

      <div className="row">
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  );
}
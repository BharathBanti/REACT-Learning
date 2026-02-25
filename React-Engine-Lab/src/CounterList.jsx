import { useState } from 'react';
import Counter from './Counter';

export default function CounterList() {
  const [counters, setCounters] = useState([1, 2, 3]);
  const [version, setVersion] = useState(0);

  function addCounter() {
    const nextId = counters.length ? Math.max(...counters) + 1 : 1;
    setCounters([...counters, nextId]);
  }

  function removeCounter(id) {
    setCounters(counters.filter((c) => c !== id));
  }

  return (
    <div>
      <button onClick={addCounter}>Add Counter</button>

      {/* <button onClick={() => setCounters([...counters].reverse())}>
        Reverse Order
      </button> */}

      <button onClick={() => setVersion((v) => v + 1)}>
        Reset All Counters
      </button>

      <div className="grid">
        {counters.map((id) => (
          <Counter key={id + '-' + version} id={id} version={version} onRemove={removeCounter} />
        ))}
      </div>
    </div>
  );
}

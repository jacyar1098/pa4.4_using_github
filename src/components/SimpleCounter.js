import React, { useState, useEffect } from 'react';

function SimpleCounter() {
  const [count, setCount] = useState(0);
  const [maxReached, setMaxReached] = useState(false);

  useEffect(() => {
    if (count >= 10) {
      setMaxReached(true);
    } else {
      setMaxReached(false);
    }
  }, [count]);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h2>Enhanced Counter</h2>
      <p>Current Count: {count}</p>
      {maxReached && <p className="warning">Maximum limit reached!</p>}
      <div className="button-group">
        <button onClick={increment} disabled={maxReached}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default SimpleCounter;
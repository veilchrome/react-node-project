import { useState } from "react";

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0);
  const add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter h1</h1>
      <span data-testid="count-display">{count}</span>
      <button data-testid="add-button" onClick={add}>
        Add
      </button>
      <button data-testid="minus-button" onClick={minus}>
        Minus
      </button>
    </div>
  );
};

export default Counter;

"use client";
import { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add
      </button>
    </div>
  );
}

import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter >= 10) {
      alert("Max value reached");
    } else {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter <= 0) {
      alert("Min value reached");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 bg-slate-100">
      <h1 className="text-3xl font-semibold">
        Counter Value: <span className="font-bold">{counter}</span>
      </h1>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-6 py-2 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 active:scale-95 transition"
        >
          Decrement
        </button>

        <button
          onClick={increment}
          className="px-6 py-2 rounded-xl bg-green-500 text-white font-medium hover:bg-green-600 active:scale-95 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;

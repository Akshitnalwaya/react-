import React, { useState } from "react";

const colors = [
  { name: "Red", value: "red" },
  { name: "Green", value: "green" },
  { name: "Pink", value: "pink" },
  { name: "Blue", value: "blue" },
];

const App = () => {
  const [colour, setColour] = useState("white");

  return (
    <div
      className="w-screen h-screen transition-colors duration-500"
      style={{ backgroundColor: colour }}
    >
      {/* Color Picker */}
      <div className="fixed bottom-10 inset-x-0 flex justify-center px-4">
        <div className="flex gap-4 bg-white/80 backdrop-blur-md shadow-xl px-6 py-4 rounded-full">
          {colors.map((c) => (
            <button
              key={c.value}
              onClick={() => setColour(c.value)}
              className={`w-12 h-12 rounded-full transition-all duration-300
                hover:scale-110
                ${colour === c.value ? "ring-4 ring-black/30" : ""}
              `}
              style={{ backgroundColor: c.value }}
              aria-label={c.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

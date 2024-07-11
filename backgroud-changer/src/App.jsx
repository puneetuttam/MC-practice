import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center rounded-3xl gap-3 shadow-lg px-3 py-2 bg-slate-300">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-2 bg-red-600 rounded-xl text-white shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("orange")}
            className="px-4 py-2 bg-orange-600 rounded-xl text-white shadow-lg"
          >
            orange
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-2 bg-green-600 rounded-xl text-white shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-2 bg-blue-600 rounded-xl text-white shadow-lg"
          >
            blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-2 bg-yellow-600 rounded-xl text-white shadow-lg"
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

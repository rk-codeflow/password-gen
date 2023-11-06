import { useState } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChars, setAllowChars] = useState(false);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let str = "";

  const randomVal = () => {
    for (let i = 0; i < chars; i++) {
      let randomChars = Math.floor(Math.random() * chars.length);
    }
    console.log(randomChars);
  };

  const rangeVal = (e) => {
    const newValue = e.target.value;
    setRange(newValue);
  };

  return (
    <div>
      <h2 className="text-center text-white mt-3 text-2xl">
        Random Password Generator
      </h2>
      <div className="mt-10 max-w-3xl mx-auto bg-slate-500 p-4 rounded-lg">
        <div className="flex">
          <input
            type="text"
            className="w-full h-10 outline-none rounded-l-md p-1"
          />
          <button className="bg-blue-500 py-1 px-3 text-white rounded-r-md">
            Copy
          </button>
        </div>
        <div className="flex gap-x-4 justify-center mt-3">
          <div className="flex gap-x-2">
            <input
              type="range"
              min="8"
              max="100"
              onChange={rangeVal}
              value={range}
            />
            <label>Length: {range}</label>
          </div>
          <div className="flex gap-x-2">
            <input type="checkbox" />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-2">
            <input type="checkbox" />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChars, setAllowChars] = useState(false);
  const [password, setPassword] = useState("");

  let str = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";
  const specialChars = "!@#$%^&*()~`";

  const passwordGenerator = () => {
    // Generate random value for generating random chars
    for (let i = 1; i <= range; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      const randomChar = chars[randomIndex];
      str += randomChar;
    }
    console.log("Random", str, range);
    setPassword(str);

    // numbers
  };

  useEffect(() => {
    passwordGenerator();
  }, [range, allowNum, allowChars]);

  return (
    <div>
      <h2 className="text-center text-white mt-3 text-2xl">
        Random Password Generator
      </h2>
      <div className="mt-10 max-w-3xl mx-auto bg-slate-500 p-4 rounded-lg">
        <div className="flex">
          <input
            value={password}
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
              onChange={(e) => {
                setRange(e.target.value);
              }}
              value={range}
            />
            <label>Length: {range}</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              onChange={() => {
                setAllowNum((prev) => !prev);
              }}
              defaultChecked={allowNum}
            />
            <label>Numbers</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              onChange={() => {
                setAllowChars((prev) => !prev);
              }}
              defaultChecked={allowChars}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

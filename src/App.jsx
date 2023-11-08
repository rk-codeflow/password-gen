import { useEffect, useRef, useState } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChars, setAllowChars] = useState(false);
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy");
  const inputRef = useRef(null);

  const passwordGenerator = () => {
    let str = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (allowNum) {
      chars += "0123456789";
    }

    if (allowChars) {
      chars += "!@#$%^&*";
    }

    // Generate random value for generating random chars
    for (let i = 1; i <= range; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      // const randomChar = chars[randomIndex];
      str += chars[randomIndex];
    }

    console.log("Random", str, range);

    setPassword(str);
  };

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setButtonText("Copied");
    }
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
            ref={inputRef}
            value={password}
            type="text"
            readOnly
            className="w-full h-10 outline-none rounded-l-md p-1"
          />
          <button
            className="bg-blue-500 py-1 px-3 text-white rounded-r-md"
            onClick={copyToClipboard}
          >
            {buttonText}
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

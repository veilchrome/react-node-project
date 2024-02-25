import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // Title Website akan Berubah
    document.title = `Mengklik ${count} kali`;
  }, [count]);

  const reset = () => {
    setCount(0);
  };
  // Mengambil State input dari User
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <h1>{count}</h1>
      <p>{name}</p>
      <h5>Klik {count} Kali</h5>
      <button onClick={() => setCount(count + 1)}>Tekan Saya</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

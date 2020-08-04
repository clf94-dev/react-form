import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingT, setName2] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setName2(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <h2>Hello {headingT}</h2>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

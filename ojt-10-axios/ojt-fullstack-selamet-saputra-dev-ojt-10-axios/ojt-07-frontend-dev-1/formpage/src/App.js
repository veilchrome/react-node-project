import React, { useState } from "react";

// Importing Button from Component
import Button from "./components/Button";
import "./App.css";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "age":
        setAge(value);
        break;
      case "address":
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    alert(
      "Form Was Submitted. The Submitted data Are \n " +
        "Name: " +
        name +
        "\n" +
        "Age: " +
        age +
        "\n" +
        "Address: " +
        address
    );
    event.preventDefault();
  };

  const handleReset = () => {
    // Reset form fields
    setName("");
    setAge("");
    setAddress("");
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Alamat
          <input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
          />
        </label>
        <label>
          Age
          <input type="number" name="age" value={age} onChange={handleChange} />
        </label>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button type="button" onClick={handleReset}>
          Reset Input
        </Button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Form Registrasi Biodata</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;

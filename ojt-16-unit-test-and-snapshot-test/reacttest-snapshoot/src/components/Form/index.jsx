// Form.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background-color: #f0f0f0;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 20px auto;
  align-items: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const StyledBox = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #1a1a1a;
  color: #fff;
  width: 25%;
  align-items: center;
  text-align: center;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [boxContent, setBoxContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setBoxContent(
      `Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email validation: Check if the email ends with @gmail.com
    if (!formData.email.endsWith("@gmail.com")) {
      setErrorMessage("Please enter a Gmail address.");
      return;
    }
    // Password validation: Check if password contains at least one capital letter
    if (!/[A-Z]/.test(formData.password)) {
      setErrorMessage("Password must contain at least one capital letter.");
      return;
    }
    setErrorMessage(""); // Clear error message if validation passes
  };

  return (
    <>
      <div className="Navbar" data-testid="navbar">
        <StyledH2>Contact Form</StyledH2>
        <StyledForm onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            aria-label="Name:"
          />
          <InputField
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Email:"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            aria-label="Password:"
          />
          <p>*Please Input Google mails for the Email</p>
          <p>*Passowrd atleast have 1 Capital Letter</p>
          <p>Test testing111</p>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit">Submit</button>
        </StyledForm>
        <StyledBox>
          <h2>Form Data:</h2>
          <p>{boxContent}</p>
        </StyledBox>
      </div>
    </>
  );
};

export default Form;

import React from "react";
// Menggunakan Class Component untuk membuat halaman About
class About extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Ini Halaman About</h1>
      </div>
    );
  }
}

export default About;

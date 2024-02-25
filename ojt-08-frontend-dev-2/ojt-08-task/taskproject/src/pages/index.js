import React from "react";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Halaman Utama</h1>
        <div className="container">
          <p>Selamet Saputra</p>
        </div>
      </div>
    );
  }
}
export default Home;

import React from "react";
import Counter from "../components/Hooks/reactHook1";

const Hook = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
        border: "2px solid #0000",
      }}
    >
      <Counter />
    </div>
  );
};

export default Hook;

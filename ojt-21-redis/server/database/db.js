import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;
export const Connection = () => {
  const MONGODB_URI = `mongodb://localhost:27017/todoAPP`;

  mongoose.connect(MONGODB_URI);

  mongoose.connection.on("connected", () => {
    console.log("Database connected OK!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database Disconnected!");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error While Connecting with the database", error.message);
  });
};

export default Connection;

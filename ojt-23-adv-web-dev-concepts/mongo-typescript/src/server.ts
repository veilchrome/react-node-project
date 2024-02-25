import express from "express";
import mongoose from "mongoose"
import animeRoutes from "./routes/animeRoutes"

const mongodURL = "mongodb://localhost:27017/animeTypescriptDB"
mongoose
  .connect(mongodURL)
  .then(() => {
    console.log("database conncected!");
  })
  .catch((err: any) => {
    console.log("cant connect to database", err);
    process.exit(1);
  });


const app = express();
const PORT = 3000;
// For Parse the BODY
app.use(express.json());



//Routes
app.use("/anime", animeRoutes);

app.listen(PORT, () => {
  console.log(`App Running on Port : ${PORT}`);
});

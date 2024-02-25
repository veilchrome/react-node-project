require("dotenv").config();
const express = require("express");
//Routes
const animeRoutes = require("./src/routes/animeRoutes");
const connectMongo = require("./src/Databases/db");

const app = express();
const PORT = 3000;
// For Parse the BODY
app.use(express.json());

connectMongo();

//Routes

app.use("/anime", animeRoutes);

app.listen(PORT, () => {
  console.log(`App Running on Port : ${PORT}`);
});

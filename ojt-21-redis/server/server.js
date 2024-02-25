import express from "express";
import cors from "cors";
import redis from "redis";
import bodyParser from "body-parser";
import { logger } from "./utils/middleware.js";
import Connection from "./database/db.js";
import Routes from "./routes/routes.js";

const app = express();

app.use(logger);

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes, logger);

const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Your server is running successfully on PORT ${PORT}`)
);

import express from "express";
import cors from "cors";
import redis from "redis";
import bodyParser from "body-parser";
import { logger } from "./utils/middleware.js";

import Connection from "./database/db.js";
import Routes from "./routes/routes.js";

const app = express();

const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT);

client.on("error", (err) => {
  console.error("Redis error:", err);
});

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

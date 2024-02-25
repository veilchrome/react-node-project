import express from "express";
import {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";
import redis from "redis";

const router = express.Router();
const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT); // Buat klien Redis

client.on("error", function (error) {
  console.error(error);
});

client.on("connect", function () {
  console.log("Redis client connected");
});

// Middleware for caching and Checking if data are exist in cache
const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl;

  client.get(key, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      console.log("Data found in Redis cache");
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

router.post("/todos", async (req, res) => {
  try {
    const newTodo = await addTodo(req, res);

    // Update cache
    client.setex(req.originalUrl, 3600, JSON.stringify(newTodo));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/todos", cacheMiddleware, async (req, res) => {
  try {
    const todos = await getAllTodos(req, res);

    // Update cache
    client.setex(req.originalUrl, 3600, JSON.stringify(todos));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/todos/:id", async (req, res) => {
  try {
    const todo = await toggleTodoDone(req, res);
    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/todos/:id", async (req, res) => {
  try {
    const todo = await updateTodo(req, res);
    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/todos/:id", async (req, res) => {
  try {
    const todo = await deleteTodo(req, res);
    res.json(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;

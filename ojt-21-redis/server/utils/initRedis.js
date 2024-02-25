import redis from "redis";

const client = redis.createClient({
  port: 6379,
  host: "127.0.0.1",
});

client.on("connected", () => {
  console.log("Client Connected to Redis");
});

client.on("error", (err) => {
  console.error(err);
});

export default client;

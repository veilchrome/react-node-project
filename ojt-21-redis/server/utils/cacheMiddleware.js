export const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl; // Use the request URL as the cache key

  client.get(key, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      // If data exists in cache
      console.log("Data found in Redis cache");
      res.send(JSON.parse(data));
    } else {
      // If data does not exist in cache
      next();
    }
  });
};

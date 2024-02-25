import express from "express";
import controllerAnime from "../Controllers/animeController"
const router = express.Router();


// READ Endpoint
router.get("/", controllerAnime.getAnimeByTitle);

// DELETE Endpoint
router.delete("/:mal_id", controllerAnime.deleteAnimeById);

export default router

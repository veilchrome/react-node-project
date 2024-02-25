import { Request, Response } from "express";
import axios from "axios";
import AnimeModel, { AnimeDocument } from "../Models/animeModel";
import { isValidObjectId } from "mongoose"

const getAnimeByTitle = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  try {
    // Add Validation to Check wherever data is exist or not in Database
    const anime: AnimeDocument | null = await AnimeModel.findOne({ title: req.query.q }); 
    if (anime && anime.title === req.query.q) {
      return res.json({
        message: "Success: Anime found in the database",
        data: anime,
      });
    } else {
      const response = await axios.get("https://api.jikan.moe/v4/anime", {
        params: { q: req.query.q },
      });
      const animeData = response.data.data;

      const savedAnime: AnimeDocument | AnimeDocument[] = await AnimeModel.create(animeData); 
      return res.json({
        message: "Success: Anime retrieved from Jikan API and saved",
        data: savedAnime,
      });
    }
  } catch (error: any) { // Explicitly specify the type of error
    console.error("Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteAnimeById = async (req: Request, res: Response): Promise<Response<any, Record<string, any>>> => {
  console.log(req.params.mal_id);
  try {
    if (!req.params.mal_id) {
      return res.status(400).json({ message: "Missing 'id' parameter" });
    }

    if (!isValidObjectId(req.params.mal_id)) {
      return res.status(400).json({ message: "Invalid 'id' parameter" });
    }

    const anime: AnimeDocument | null = await AnimeModel.findById(req.params.mal_id); 
    if (!anime) {
      return res.status(404).json({ message: "Anime not found" });
    }

    await anime.remove();
    return res.json({ message: "Success: Anime deleted successfully" });
  } catch (error: any) { // Explicitly specify the type of error
    console.error("Error:", error.message);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export default { getAnimeByTitle, deleteAnimeById };

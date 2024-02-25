"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const animeModel_1 = __importDefault(require("../Models/animeModel"));
const mongoose_1 = require("mongoose");
const getAnimeByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const anime = yield animeModel_1.default.findOne({ title: req.query.q });
        if (anime && anime.title === req.query.q) {
            return res.json({
                message: "Success: Anime found in the database",
                data: anime,
            });
        }
        else {
            const response = yield axios_1.default.get("https://api.jikan.moe/v4/anime", {
                params: { q: req.query.q },
            });
            const animeData = response.data.data;
            const savedAnime = yield animeModel_1.default.create(animeData);
            return res.json({
                message: "Success: Anime retrieved from Jikan API and saved",
                data: savedAnime,
            });
        }
    }
    catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
});
const deleteAnimeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.mal_id);
    try {
        if (!req.params.mal_id) {
            return res.status(400).json({ message: "Missing 'id' parameter" });
        }
        if (!(0, mongoose_1.isValidObjectId)(req.params.mal_id)) {
            return res.status(400).json({ message: "Invalid 'id' parameter" });
        }
        const anime = yield animeModel_1.default.findById(req.params.mal_id);
        if (!anime) {
            return res.status(404).json({ message: "Anime not found" });
        }
        yield anime.remove();
        return res.json({ message: "Success: Anime deleted successfully" });
    }
    catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
});
exports.default = { getAnimeByTitle, deleteAnimeById };

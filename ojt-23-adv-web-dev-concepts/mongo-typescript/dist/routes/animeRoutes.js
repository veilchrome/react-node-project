"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animeController_1 = __importDefault(require("../Controllers/animeController"));
const router = express_1.default.Router();
router.get("/", animeController_1.default.getAnimeByTitle);
router.delete("/:mal_id", animeController_1.default.deleteAnimeById);
exports.default = router;

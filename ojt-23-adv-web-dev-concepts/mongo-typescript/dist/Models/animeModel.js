"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const broadcastInfoSchema = new mongoose_1.Schema({
    day: { type: String, required: false },
    time: { type: String, required: false },
    timezone: { type: String, required: false },
    string: { type: String, required: false },
});
const producerInfoSchema = new mongoose_1.Schema({
    mal_id: { type: String, required: false },
    type: { type: String, required: false },
    name: { type: String, required: false },
    url: { type: String, required: false },
});
const imageSchema = new mongoose_1.Schema({
    image_url: { type: String, required: false },
    small_image_url: { type: String, required: false },
    large_image_url: { type: String, required: false },
});
const imageInfoSchema = new mongoose_1.Schema({
    jpg: { type: imageSchema, required: false },
    webp: { type: imageSchema, required: false },
});
const trailerImageInfoSchema = new mongoose_1.Schema({
    image_url: { type: String, required: false },
    small_image_url: { type: String, required: false },
    medium_image_url: { type: String, required: false },
    maximum_image_url: { type: String, required: false },
});
const trailerInfoSchema = new mongoose_1.Schema({
    youtube_id: { type: String, required: false },
    url: { type: String, required: false },
    embed_url: { type: String, required: false },
    images: trailerImageInfoSchema,
});
const animeSchema = new mongoose_1.Schema({
    mal_id: { type: String, required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    source: { type: String, required: true },
    status: { type: String, required: true },
    rating: { type: String, required: false },
    rank: { type: Number, required: false },
    popularity: { type: Number, required: false },
    broadcast: broadcastInfoSchema,
    producers: [producerInfoSchema],
    images: imageInfoSchema,
    trailer: trailerInfoSchema,
});
const AnimeModel = mongoose_1.default.model("Anime", animeSchema);
exports.default = AnimeModel;

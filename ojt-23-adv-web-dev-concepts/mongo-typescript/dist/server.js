"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const animeRoutes_1 = __importDefault(require("./routes/animeRoutes"));
const mongodURL = "mongodb://localhost:27017/animeTypescriptDB";
mongoose_1.default
    .connect(mongodURL)
    .then(() => {
    console.log("database conncected!");
})
    .catch((err) => {
    console.log("cant connect to database", err);
    process.exit(1);
});
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/anime", animeRoutes_1.default);
app.listen(PORT, () => {
    console.log(`App Running on Port : ${PORT}`);
});

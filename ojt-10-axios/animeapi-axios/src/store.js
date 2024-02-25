import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./animeSlicer";

const store = configureStore({
	reducer: {
		anime: animeReducer,
	},
});

export default store;

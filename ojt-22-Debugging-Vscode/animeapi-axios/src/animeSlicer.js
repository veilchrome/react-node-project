import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import animeAPI from "./api";

export const fetchAnimeByQuery = createAsyncThunk(
	"anime/fetchAnimeByQuery",
	async (query) => {
		const { data } = await animeAPI.get("/anime", {
			params: {
				q: query,
			},
		});
		return data.data;
	}
);

const animeSlicer = createSlice({
	name: "anime",
	initialState: {
		data: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setEmptyData: (state) => {
			state.data = [];
			state.status = "idle";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAnimeByQuery.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchAnimeByQuery.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.data = action.payload;
			})
			.addCase(fetchAnimeByQuery.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const { setEmptyData } = animeSlicer.actions;

export default animeSlicer.reducer;

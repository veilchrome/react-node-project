import axios from "axios";

const animeAPI = axios.create({
	baseURL: "https://api.jikan.moe/v4",
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
	},
});

export default animeAPI;

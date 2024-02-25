import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAnimeByQuery, setEmptyData } from "../animeSlicer";
import AnimeTable from "../components/AnimeTable";

import "./animepage.css";

const AnimePage = () => {
	const [query, setQuery] = useState("");
	const dispatch = useDispatch();
	const state = useSelector((state) => state.anime);

	useEffect(() => {
		const delayDebounce = setTimeout(() => {
			if (query) {
				dispatch(fetchAnimeByQuery(query));
			} else {
				dispatch(setEmptyData());
			}
		}, 2000);

		return () => clearTimeout(delayDebounce);
	}, [query]);
	return (
		<div className="container-table">
			<h1>Anime Search API</h1>
			<input
				type="text"
				placeholder="Enter Anime Name"
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
			<div className="wrapper-table">
				{state.status === "loading" && <p>Getting Anime...</p>}
				{state.status === "succeeded" && query.length > 0 && (
					<AnimeTable anime={state.data} />
				)}
				{state.status === "failed" && <p>{state.error.message}</p>}
			</div>
		</div>
	);
};

export default AnimePage;

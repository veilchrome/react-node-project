import AnimeRow from "./AnimeRow";

const AnimeTable = (props) => {
	const { anime: state } = props;
	return (
		<table>
			<thead>
				<tr>
					<th>Anime Images</th>
					<th>Titles</th>
					<th>Rating</th>
					<th>Scores</th>
				</tr>
			</thead>
			<tbody>
				{state.map((anime) => (
					<AnimeRow
						key={anime.mal_id}
						image={anime.images.jpg.image_url}
						title={anime.title}
						rating={anime.rating}
						score={anime.score}
					/>
				))}
			</tbody>
		</table>
	);
};

export default AnimeTable;

const AnimeRow = ({ image, title, rating, score }) => {
	return (
		<tr>
			<td>
				<img src={image} alt={title} />
			</td>
			<td> {title}</td>
			<td>{rating}</td>
			<td>{score}</td>
		</tr>
	);
};

export default AnimeRow;

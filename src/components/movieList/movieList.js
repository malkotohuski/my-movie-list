import Movie from "../Movies/movies";

export default function MovieList({ movies }) {
    return (
        <ul>
            {movies.map((movie, index) => (
                <li>
                    <Movie key={index} {...movie} />
                </li>
            ))}
        </ul>
    );
}

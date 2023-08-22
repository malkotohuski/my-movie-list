import Movie from "../Movies/movies";

export default function MovieList({ movies, onMovieDelete }) {
    return (
        <ul>
            {movies.map((movie, index) => (
                <li>
                    <Movie
                        key={index}
                        {...movie}
                        onMovieDelete={onMovieDelete}
                    />
                </li>
            ))}
        </ul>
    );
}

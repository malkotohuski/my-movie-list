import Movie from "../Movies/movies";

export default function MovieList({ movies, onMovieDelete, onMovieFilter }) {
    return (
        <ul>
            {movies.map((movie, index) => (
                <li>
                    <Movie
                        key={index}
                        {...movie}
                        onMovieDelete={onMovieDelete}
                        onMovieFilter={onMovieFilter}
                    />
                </li>
            ))}
        </ul>
    );
}

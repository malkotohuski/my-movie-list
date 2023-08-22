import React, { useState } from "react";
import MovieList from "./components/movieList/movieList";
import { movieList as movieData } from "./API/movie-list";

function App() {
    const [movieList, setMovieList] = useState(movieData);

    const onMovieDelete = (Title) => {
        setMovieList((state) => state.filter((x) => x.Title !== Title));
    };

    return (
        <div>
            <h1>Movie List</h1>

            <MovieList movies={movieList} onMovieDelete={onMovieDelete} />
        </div>
    );
}

export default App;

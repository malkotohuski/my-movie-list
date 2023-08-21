import React from "react";
import MovieList from "./components/movieList/movieList";
import { movieList } from "./API/movie-list";

function App() {
    return (
        <div>
            <h1>Movie List</h1>

            <MovieList movies={movieList.slice(0, 10)} />
        </div>
    );
}

export default App;

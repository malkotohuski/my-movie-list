import { useEffect } from "react";
import styles from "./movies.module.css";

export default function Movie({
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Response,
    Images,
    onMovieDelete,
    onMovieFilter,
    selected,
}) {
    useEffect(() => {
        console.log(`Movie ${Title} mounted!!!`);

        return () => {
            console.log(`Movie ${Title} unmounted!!!`);
        };
    }, []);

    useEffect(() => {
        console.log(`Movie ${Title} updated!!!`);
    }, [selected]);

    return (
        <article className={styles.movieArticle}>
            <h3>
                {Title}, {Year}, {Genre}, {Rated}
            </h3>
            {selected && <h4>Selected</h4>}
            <main>
                <img src={Poster} alt={Title} />
                <p>{Plot}</p>
            </main>
            <footer>
                <p>Director: {Director}</p>
                <button onClick={() => onMovieDelete(Title)}>Delete</button>
                <button onClick={() => onMovieFilter(Title)}>Filter</button>
            </footer>
        </article>
    );
}

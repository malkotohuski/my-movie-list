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
}) {
    return (
        <article>
            <h3>
                {Title}, {Year}, {Genre}, {Rated}
            </h3>
            <main>
                <img src={Poster} alt={Title} />
                <p>{Plot}</p>
            </main>
            <footer>
                <p>Director: {Director}</p>
            </footer>
        </article>
    );
}

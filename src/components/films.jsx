import { shuffleFilms } from "../utils/shuffleFilms.js";
import "../styles/films.css";

function Films({ films, setFilms, score, setScore, best, setBest }) {
    function playTurn(id) {
        const updatedFilms = [...films];
        const film = updatedFilms.find((film) => film.id === id);

        if (!film.clicked) {
            film.clicked = true;
            setScore(score + 1)
            if (score >= best) setBest(score + 1)
            setFilms(shuffleFilms(updatedFilms))
        } else {
            console.log("FILM ALREADY CLICKED!")
        }
    }

    return (
        <div className="film-grid-container">
            {films.map((film) => (
                <div key={film.id} className="film-container" onClick={() => playTurn(film.id)}>
                    <img
                        src={`https://image.tmdb.org/t/p/w154${film.poster_path}`}
                        alt={`${film.title}'s poster`}
                        title={`${film.title} (${film.year})`}
                    />
                </div>
            ))}
        </div>
    );
}

export default Films;
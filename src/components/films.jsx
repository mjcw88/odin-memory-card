import { shuffleFilms } from "../utils/shuffleFilms.js";
import "../styles/films.css";

function Films({ films, setFilms, score, setScore, best, setBest }) {
    function handleScore(film) {
        film.clicked = true;
        setScore(score + 1);
        if (score >= best) setBest(score + 1);
    }

    function resetScore(updatedFilms) {
        updatedFilms.forEach(film => {
            film.clicked = false;
        })
        setScore(0);
    }

    function playTurn(id) {
        const updatedFilms = [...films];
        const film = updatedFilms.find((film) => film.id === id);

        if (!film.clicked) {
            handleScore(film);
        } else {
            resetScore(updatedFilms);
        }
        setFilms(shuffleFilms(updatedFilms));
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
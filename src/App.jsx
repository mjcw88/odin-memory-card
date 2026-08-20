import { useState, useEffect } from 'react';
import { shuffleFilms } from "./utils/shuffleFilms.js";
import Score from "./components/score.jsx";
import Films from "./components/films.jsx";

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    fetch('/.netlify/functions/movies')
      .then(res => res.json())
      .then(res => {
        const parsedFilms = res.results.map(({ id, title, poster_path, release_date }) => ({ 
          id, 
          title, 
          poster_path, 
          year: release_date ? release_date.slice(0, 4) : 'Unknown',
          clicked: false,
        }))
        setFilms(shuffleFilms(parsedFilms))
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <header>
        <h1>Memory Card</h1>
      </header>
      {loading ? (
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>Something went wrong! {error.message}</p>
        </div>
      ) : (
        <>
          <Score score={score} best={best} />
          <Films films={films} setFilms={setFilms} score={score} setScore={setScore} best={best} setBest={setBest}/>
        </>
      )}
    </>
  );
}

export default App;
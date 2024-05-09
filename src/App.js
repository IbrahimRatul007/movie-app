import { useState } from "react";
import movies from "./Data/movies.json";
function App() {
  const [watchedList, setWatchedList] = useState([]);
  const [wishedList, setWishedList] = useState([]);
  return (
    <div className="App">
      <Header />
      <ul
        style={{ display: "grid", gridTemplateColumns: "20% 20% 20% 20% 20%" }}
      >
        {movies.map((movie) => (
          <Card
            movie={movie}
            key={movie.id}
            // watchedList={watchedList}
            // wishedList={wishedList}
            // setWatchedList={setWatchedList}
            // setWishedList={setWishedList}
          />
        ))}
      </ul>
    </div>
  );
}

const Header = () => {
  return (
    <>
      <h1>Movies</h1>
    </>
  );
};

const Card = ({
  movie,
  watchedList,
  wishedList,
  setWatchedList,
  setWishedList,
}) => {
  function addWatchedHandler() {
    setWatchedList((prev) => [...prev, movie.title]);
  }

  function addWishedHandler() {
    setWishedList((prev) => [...prev, movie.title]);
  }

  return (
    <div
      style={{
        border: "solid 2px black",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <img src={movie.image} style={{ height: "150px", width: "50%" }} />
      <div
        style={{
          width: "70%",
        }}
      >
        <p>
          {movie.title}
          <span> ({movie.year})</span>
        </p>
        <p>
          imdb rating: <strong>{movie.rating}</strong>
        </p>
        <p>{movie.genre}</p>
      </div>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          gap: "10px",
          width: "70%",
        }}
      >
        <button onClick={addWatchedHandler}>Watched</button>
        <button onClick={addWishedHandler}>Watchlist</button>
      </div>
    </div>
  );
};

export default App;

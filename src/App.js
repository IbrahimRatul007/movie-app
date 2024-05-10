import { useState } from "react";
import movies from "./Data/movies.json";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  const [watchedList, setWatchedList] = useState([]);
  const [wishedList, setWishedList] = useState([]);
  console.log(watchedList);
  console.log(wishedList);
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
            watchedList={watchedList}
            wishedList={wishedList}
            setWatchedList={setWatchedList}
            setWishedList={setWishedList}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

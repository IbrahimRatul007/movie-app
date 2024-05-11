import { useState } from "react";
import "./App.css";
import movies from "./Data/movies.json";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Sidebar from "./Components/UI/Sidebar";

function App() {
  const [watchedList, setWatchedList] = useState([]);
  const [wishedList, setWishedList] = useState([]);

  return (
    <div className="App">
      <Header />
      <div>
        <Sidebar />
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "20% 20% 20% 20% 20%",
            position: "relative",
            zIndex: 0,
          }}
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
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import movies from "./Data/movies.json";
import Header from "./Components/Header";
import Card from "./Components/Card";
import WishedList from "./Components/WishedList";
// import Sidebar from "./Components/UI/Sidebar";
// const [sideBarOpen, setSideBarOpen] = useState(true);

function App() {
  const [watchedList, setWatchedList] = useState([]);
  const [wishedList, setWishedList] = useState([]);
  const [visible, setVisible] = useState(8);

  function handleIncreaseVisibility() {
    setVisible((prev) => prev + 8);
  }
  function handleReduceVisibility() {
    setVisible(8);
  }

  return (
    <div className="App">
      <Header />
      <div className="hero">
        <div className="card-container">
          {movies.slice(0, visible).map((movie) => (
            <Card
              movies={movies}
              movie={movie}
              key={movie.id}
              watchedList={watchedList}
              wishedList={wishedList}
              setWatchedList={setWatchedList}
              setWishedList={setWishedList}
            />
          ))}
          <div className="container-buttons">
            {visible < 100 && (
              <button onClick={handleIncreaseVisibility}>See More</button>
            )}
            {visible > 8 && (
              <button onClick={handleReduceVisibility}>Collapse</button>
            )}
          </div>
        </div>
        <WishedList wishedList={wishedList} />
      </div>
    </div>
  );
}

export default App;

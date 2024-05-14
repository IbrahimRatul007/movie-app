import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WatchedList from "./WatchedList";

const WishedList = ({
  wishedList,
  setWishedList,
  setWatchedList,
  watchedList,
}) => {
  function deleteHandler(title) {
    const filteredList = wishedList.filter((movie) => movie.title != title);
    setWishedList(filteredList);
  }
  function addWatchedHandler(movie) {
    deleteHandler(movie.title);
    if (watchedList.map((movie) => movie.title).includes(movie.title)) return;
    setWatchedList((prev) => [...prev, movie]);
  }
  return (
    <div
      style={{
        border: "solid 4px pink",
        width: "30%",
        maxHeight: "60vh",
        overflow: "scroll",
        overflowX: "hidden",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // background: "black",
      }}
    >
      <h2 style={{ color: "rgb(245, 66, 108)" }}>WishedList</h2>
      <ul>
        {wishedList.map((movie) => (
          <li
            key={movie.rank}
            style={{ color: "white", padding: "0", listStyle: "none" }}
          >
            <div
              style={{
                display: "flex",
                // justifyContent: "space around",
                alignItems: "center",
                border: "solid 3px rgb(245, 66, 108)",
                width: "500px",
              }}
            >
              <img
                src={movie.image}
                alt="movie poster"
                style={{ height: "70px", width: "50px", marginRight: "15px" }}
              />{" "}
              <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                {movie.title}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginLeft: "auto",
                }}
              >
                <button
                  style={{
                    width: "5px",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "auto",
                    color: "white",
                  }}
                  onClick={() => deleteHandler(movie.title)}
                >
                  x
                </button>
                <VisibilityIcon
                  onClick={() => addWatchedHandler(movie)}
                  style={{ color: "White", marginRight: "5px" }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishedList;

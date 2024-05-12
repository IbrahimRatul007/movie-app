import React from "react";

const WatchedList = ({ watchedList }) => {
  return (
    <div
      style={{
        border: "solid 4px pink",
        borderRadius: "10px",
        width: "40%",
        maxHeight: "60vh",
        overflow: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // background: "black",
      }}
    >
      <h2 style={{ color: "rgb(245, 66, 108)" }}>Watched Movies</h2>;
      <ul>
        {watchedList.map((movie) => (
          <li
            key={movie.rank}
            style={{ color: "white", padding: "0", listStyle: "none" }}
          >
            <div
              style={{
                display: "flex",
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
              {movie.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;

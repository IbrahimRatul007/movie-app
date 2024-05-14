import React from "react";

const WatchedList = ({ watchedList, setWatchedList }) => {
  function delteHandler(title) {
    const filteredList = watchedList.filter((movie) => movie.title !== title);
    setWatchedList(filteredList);
  }
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
      <h2 style={{ color: "rgb(245, 66, 108)", fontSize: "50px" }}>
        Watched Movies
      </h2>
      ;
      <ul>
        {watchedList.map((movie) => (
          <li
            key={movie.rank}
            style={{
              color: "white",
              padding: "0",
              listStyle: "none",
              textShadow: "#fc0 1px 0 10px",
            }}
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
              <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                {movie.title}
              </p>
              <button
                onClick={() => delteHandler(movie.title)}
                style={{
                  width: "5px",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "auto",
                  color: "white",
                  marginRight: "5px",
                }}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchedList;

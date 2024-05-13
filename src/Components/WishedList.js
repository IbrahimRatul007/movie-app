import React from "react";

const WishedList = ({ wishedList }) => {
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishedList;

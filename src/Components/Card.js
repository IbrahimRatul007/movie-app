import { StyledCard } from "./styles/Card.styled";
import { StyledCardItem } from "./styles/CardItem.styled";

const Card = ({ movie, setWatchedList, setWishedList }) => {
  function addWatchedHandler() {
    setWatchedList((prev) => [...prev, movie.title]);
  }

  function addWishedHandler() {
    setWishedList((prev) => [...prev, movie.title]);
  }

  return (
    <StyledCard className="wrapper">
      <div className="card">
        <img src={movie.image} />
        <div className="descriptions">
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <button onClick={addWatchedHandler}>Watched</button>
          <button onClick={addWishedHandler}>Watchlist</button>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;

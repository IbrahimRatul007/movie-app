import {
  Wrapper,
  StyledCard,
  StyledImage,
  StyledDescription,
} from "./styles/Card.styled";
import { StyledCardItem } from "./styles/CardItem.styled";

const Card = ({ movie, setWatchedList, setWishedList }) => {
  function addWatchedHandler() {
    setWatchedList((prev) => [...prev, movie.title]);
  }

  function addWishedHandler() {
    setWishedList((prev) => [...prev, movie.title]);
  }

  return (
    <Wrapper>
      <StyledCard>
        <StyledImage src={movie.image} />
        <StyledDescription>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <button onClick={addWatchedHandler}>Watched</button>
          <button onClick={addWishedHandler}>Watchlist</button>
        </StyledDescription>
      </StyledCard>
    </Wrapper>
  );
};

export default Card;

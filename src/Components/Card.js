import {
  StyledCard,
  CardImage,
  CardInfo,
  Title,
  P,
  Buttons,
} from "./styles/Card.styled";

const Card = ({ movies, movie, setWatchedList, setWishedList }) => {
  function addWatchedHandler() {
    setWatchedList((prev) => [...prev, movie.title]);
  }

  function addWishedHandler() {
    setWishedList((prev) => [...prev, movie.title]);
  }

  return (
    // <Wrapper>
    <StyledCard>
      <CardImage src={movie.image} />
      <CardInfo>
        <Title>{movie.title}</Title>
        <P>{movie.description}</P>
        <Buttons>
          <button onClick={addWatchedHandler}>Watched</button>
          <button onClick={addWishedHandler}>Watchlist</button>
        </Buttons>
      </CardInfo>
    </StyledCard>
    // </Wrapper>
  );
};

export default Card;

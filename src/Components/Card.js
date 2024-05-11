import {
  Wrapper,
  StyledCard,
  CardImage,
  CardInfo,
  Title,
  P,
  Buttons,
} from "./styles/Card.styled";

const Card = ({ movie, setWatchedList, setWishedList }) => {
  function addWatchedHandler() {
    setWatchedList((prev) => [...prev, movie.title]);
  }

  function addWishedHandler() {
    setWishedList((prev) => [...prev, movie.title]);
  }
  function cardSelectHandler() {
    console.log(movie.title);
  }

  return (
    <Wrapper>
      <StyledCard onClick={cardSelectHandler}>
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
    </Wrapper>
  );
};

export default Card;

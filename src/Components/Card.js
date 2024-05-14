import {
  StyledCard,
  Wrapper,
  CardImage,
  CardInfo,
  Title,
  P,
  Buttons,
} from "./styles/Card.styled";

const Card = ({
  movies,
  movie,
  setWatchedList,
  setWishedList,
  watchedList,
  wishedList,
}) => {
  function addWatchedHandler() {
    if (watchedList.map((movie) => movie.title).includes(movie.title)) {
      return;
    }
    setWatchedList((prev) => [...prev, movie]);
  }

  function addWishedHandler() {
    if (wishedList.map((movie) => movie.title).includes(movie.title)) {
      return;
    }
    setWishedList((prev) => [...prev, movie]);
  }

  return (
    // <Wrapper>
    <StyledCard>
      <CardImage src={movie.image} />
      <CardInfo>
        <Title>
          {movie.title} <span>({movie.year})</span>
        </Title>
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

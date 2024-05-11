import { StyledHeader } from "./styles/Header.styled";
const Header = () => {
  return (
    <StyledHeader>
      <h1>
        Top 100 <span>Movies</span>
      </h1>
      <div>
        <a href="#">Watched Movies</a>
        <a href="#">Want To Watch</a>
      </div>
    </StyledHeader>
  );
};

export default Header;

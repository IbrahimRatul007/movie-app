/* eslint-disable jsx-a11y/anchor-is-valid */
import { StyledHeader } from "./styles/Header.styled";
import image from "../PageBanner.png";
const Header = () => {
  return (
    // <StyledHeader src={image} alt="banner" />
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

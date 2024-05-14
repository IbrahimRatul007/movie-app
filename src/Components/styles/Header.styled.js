import styled from "styled-components";

export const StyledHeader = styled.div`
  background-color: rgba(255, -1, 0, 0.02);
  height: 40px;
  width: 1600px;
  margin: auto;
  padding: 40px;
  width: auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    // background-color: rgb(245, 66, 108);
    width: 1000;
    border-radius: 20px;
    color: white;
    font-size: 150px;
    // margin: auto;
    transform: translate(50%);
    cursor: pointer;
    text-shadow: #fc0 1px 0 10px;
  }
  & span {
    background-color: #202020;
    color: rgb(245, 66, 108);
    height: 100%;
  }
  & div {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  & a {
    font-size: 1.2rem;
    color: rgb(245, 66, 108);
    text-decoration: none;
    font-weight: bold;
  }
  & a:hover {
    scale: 1.2;
  }
`;

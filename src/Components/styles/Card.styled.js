import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 650px;
  // height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: green;
`;

export const StyledCard = styled.div`
  flex: 1;
  flex-basis: 300px;
  flex-grow: 0;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;

  &:hover {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    transform: scale(0.97);
  }
`;
export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  &:hover {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    transform: scale(1.6) rotate(20deg);
    filter: blur(3px);
  }
`;
export const StyledDescription = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  transition: all 0.7s ease-in-out;
  padding: 10px;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);

  &:hover {
    left: 0px;
    transition: all 0.7s ease-in-out;
    clip-path: circle(75%);
  }
`;

export const H1 = styled.h1`
  color: #ff3838;
  letter-spacing: 1px;
  margin: 0px;
`;
export const P = styled.p`
  line-height: 20px;
  height: 70%;
  font-size: 15px;
`;

export const Button = styled.button`
  width: fit-content;
  height: 40px;
  margin-right: 5px;
  cursor: pointer;
  border-style: none;
  background-color: #ff3838;
  color: #fff;
  font-size: 15px;
  outline: none;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(0.95) translateX(-5px);
    transition: all 0.25s ease-in-out;
  }
`;

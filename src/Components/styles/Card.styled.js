import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /* background-color: green; */
`;

export const StyledCard = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 350px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover img {
    filter: blur(3px);
    z-index: 0;
  }
`;
export const CardImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border: solid 2px white;
  z-index: 1;
  transition: filter 0.5s ease;
`;
export const CardInfo = styled.div`
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: solid 2px white;
  display: flex;
  transform: translateX(0);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.8);
  transition: all 1 ease;
  &:hover {
    transform: translateY(0);
    z-index: 1;
  }
`;

export const Title = styled.h2`
  color: rgb(245, 66, 108);
  letter-spacing: 1px;
  margin: 0px;
  font-weight: bold;
`;
export const P = styled.p`
  width: 100%;
  overflow: auto;
`;

export const Buttons = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  width: fit-content;

  & button {
    background-color: rgb(245, 66, 108);
    border-radius: 12px;
    color: #000;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 15px;
    text-align: center;
    transition: 200ms;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  & button:hover {
    transform: scale(0.95) translateX(-5px);
    transition: all 0.25s ease-in-out;
  }

  & button:not(:disabled):hover,
  button:not(:disabled):focus {
    outline: 0;
    background: rgb(245, 66, 108);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  }

  & button:disabled {
    filter: saturate(0.2) opacity(0.5);
    -webkit-filter: saturate(0.2) opacity(0.5);
    cursor: not-allowed;
  }
`;

// <!-- HTML !-->
// <button class="button-32" role="button">Button 32</button>

/* CSS */
// .button-32 {

// }

// .button-32:not(:disabled):hover,
// .button-32:not(:disabled):focus {
//   outline: 0;
//   background: #f4e603;
//   box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
// }

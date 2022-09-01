import styled from "styled-components";

export const MainInfoContainer = styled.div`
  width: 100%;
  height: 100vh;

  h1 {
    font-family: "Courgette", cursive;
    color: rgba(43, 75, 71, 1);
  }
`;

export const TitleContainer = styled.div`
  img {
    height: 4rem;
    width: 100%;
  }
  h1 {
    position: absolute;
    background-color: white;
    width: 100%;
    margin-top: 12px;
  }
`;

export const InfoContainer = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  margin-top: 2rem;

  position: relative;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const InfoHolder = styled.div`
  width: 100%;
  height: 4rem;
  background-color: rgba(43, 75, 71, 0.3);
  border-radius: 2rem;

  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: start;
  align-items: center;

  span {
    font-size: 3rem;
    color: white;
    margin-left: 20px;
  }

  label {
    font-size: 1.2rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: bolder;
    color: rgba(43, 75, 71, 1);
    text-shadow: 0.01rem 0.01rem black;
  }
`;

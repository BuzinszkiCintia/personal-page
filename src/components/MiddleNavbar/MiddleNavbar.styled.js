import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 70vh;
`;

export const MinddleNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5rem;

  @media only screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;
export const PictureContainer = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.3em);
  }
`;
export const NavbarIMG = styled.img`
  width: 13rem;
  height: auto;
  border-radius: 100%;
  box-shadow: 0.5rem 0.5rem 0.3rem rgba(43, 75, 71, 0.4);

  @media only screen and (max-width: 480px) {
    width: 7rem;
    height: auto;
  }
`;
export const NavbarLabel = styled.label`
  position: absolute;
  width: 100%;
  top: 40%;
  justify-content: center;

  font-size: 20px;
  font-weight: bolder;
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-shadow: 0.01rem 0.01rem black;
  color: rgba(43, 75, 71, 1);

  @media only screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

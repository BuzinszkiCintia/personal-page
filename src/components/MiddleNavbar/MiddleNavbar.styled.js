import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const MinddleNavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5rem;
`;
export const PictureContainer = styled.div`
  position: relative;
  //kell még hover effect esetleg az aljára valami svg
  &:hover {
    cursor: pointer;
  }
`;
export const NavbarIMG = styled.img`
  width: 10rem;
  height: auto;
  border-radius: 100%;
  box-shadow: 0.5rem 0.5rem 0.3rem rgba(43, 75, 71, 0.4);
`;
export const NavbarLabel = styled.label`
  position: absolute;
  width: 100%;
  top: 40%;
  justify-content: center;

  font-size: 18px;
  font-weight: bolder;
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-shadow: 0.01rem 0.01rem black;
  color: rgba(43, 75, 71, 1);
`;

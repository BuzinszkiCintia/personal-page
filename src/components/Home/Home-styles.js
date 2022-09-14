import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Navbar = styled.div`
  width: 100%;
  position: absolute;
  top: 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  button {
    padding-top: 0rem;
    background-color: transparent;
    border: none;
    margin: 0;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  h3 {
    padding: 1rem;
    padding-top: 0rem;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 0.1rem;
  }
`;

export const IntroContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;

  h1 {
    font-family: "Courgette", cursive;
  }
  h4 {
    font-family: "Roboto Condensed", sans-serif;
    text-transform: uppercase;
  }
`;

export const ProfileImg = styled.img`
  width: 15rem;
  border-radius: 1.5rem;
  box-shadow: 0.5rem 0.5rem 0.3rem rgba(43, 75, 71, 0.4);
`;

export const NavbarImg = styled.img`
  width: 100%;
`;

import styled from "styled-components";
import gridBC from "../../images/IMG_1395.PNG";

export const GridsContainer = styled.div`
  width: 100%;
  min-height: 70vh;

  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const Grid = styled.div`
  width: 50%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr 0.7fr 0.5fr 0.7fr 0.7fr 0.5fr 0.7fr;

  border: solid 1px rgba(43, 75, 71, 0.3);
  border-radius: 1rem;

  margin: 1rem;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }

  .griditem-1 {
    background: url(${gridBC});
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  .griditem-2 {
    background-color: rgba(43, 75, 71, 0.2);
    display: flex;
    align-items: center;
    padding-left: 1rem;
  }
  .griditem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-family: "Courgette", cursive;
    color: rgba(43, 75, 71, 1);
    text-shadow: 1px 1px black;
  }
  h3 {
    margin: 0;
    font-style: italic;
  }
  :nth-child(2) {
    grid-template-rows: 0.8fr 0.4fr 0.7fr 0.4fr 0.7fr 0.4fr 0.7fr;
  }

  h4 {
    color: rgba(43, 75, 71, 1);
    font-style: italic;
  }
`;
export const ProjectLink = styled.a`
  @media only screen and (max-width: 480px) {
    font-size: small;
  }
`;

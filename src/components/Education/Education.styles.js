import styled from "styled-components";
import codecool from "../../images/Codecool_logo.webp";
import bge from "../../images/bge_logo.jpg";

import {
  MainWorkContainer,
  WorkContainer,
  WorkGrid,
  WorkCircle,
  WorkLabel,
  Text,
} from "../WorkExperience/WorkExperience.styled";

export const MainEduContainer = styled(MainWorkContainer)``;
export const EduContainer = styled(WorkContainer)``;
export const EduGrid = styled(WorkGrid)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  row-gap: 1rem;
  .codecool {
    background: url(${codecool});
    background-size: contain;
  }

  .bge {
    background: url(${bge});
    background-size: contain;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
    border-radius: 4rem;
  }
`;
export const EduCircle = styled(WorkCircle)``;
export const EduLabel = styled(WorkLabel)`
  font-size: larger;
  @media only screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
export const EduText = styled(Text)`
  text-align: center;
  padding-top: 2rem;
`;

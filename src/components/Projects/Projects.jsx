import {
  MainWorkContainer,
  WorkTitleContainer,
} from "../WorkExperience/WorkExperience.styled";
import border from "../../images/IMG_1395.PNG";
import { GridsContainer, FirstGrid, ProjectLink } from "./Projects.style";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element id="Pojects" name="Projects">
      <MainWorkContainer>
        <WorkTitleContainer>
          <h1>Projects & Other information </h1>
          <img src={border} alt="border" />
        </WorkTitleContainer>
        <GridsContainer>
          <FirstGrid>
            <div className="griditem-1">
              <h2>Projects</h2>
            </div>
            <div className="griditem-2">
              <h3>GitHub Page</h3>
            </div>
            <div className="griditem">
              <ProjectLink href="url">
                https://github.com/BuzinszkiCintia
              </ProjectLink>
            </div>
            <div className="griditem-2">
              <h3>Codecool projects</h3>
            </div>
            <div className="griditem">
              <ProjectLink href="url">
                https://github.com/BuzinszkiCintia/Codecool_react-and-morty
              </ProjectLink>
            </div>
            <div className="griditem">
              <ProjectLink href="url">
                https://github.com/BuzinszkiCintia/Codecool-API-Wars
              </ProjectLink>
            </div>
            <div className="griditem-2">
              <h3>My projects</h3>
            </div>
            <div className="griditem">
              <h4>Coming soon...</h4>
            </div>
          </FirstGrid>
          <FirstGrid>
            <div className="griditem-1">
              <h2>Other information</h2>
            </div>
            <div className="griditem-2">
              <h3>Interests</h3>
            </div>
            <div className="griditem">
              <h4>Digital drawing</h4>
            </div>
            <div className="griditem-2">
              <h3>Languages</h3>
            </div>
            <div className="griditem">
              <h4>English - B2</h4>
            </div>
            <div className="griditem-2">
              <h3>Other</h3>
            </div>
            <div className="griditem">
              <h4>Driving license Category „B" (2014)</h4>
            </div>
          </FirstGrid>
        </GridsContainer>
      </MainWorkContainer>
    </Element>
  );
};

export default Projects;

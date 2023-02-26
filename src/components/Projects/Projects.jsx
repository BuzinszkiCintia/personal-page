import {
  MainWorkContainer,
  WorkTitleContainer,
} from "../WorkExperience/WorkExperience.styled";
import border from "../../images/IMG_1395.webp";
import { GridsContainer, Grid, ProjectLink } from "./Projects.style";
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
          <Grid>
            <div className="griditem-1">
              <h2>Projects</h2>
            </div>
            <div className="griditem-2">
              <h3>GitHub Page</h3>
            </div>
            <div className="griditem">
              <ProjectLink
                href="https://github.com/BuzinszkiCintia"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/BuzinszkiCintia
              </ProjectLink>
            </div>
            <div className="griditem-2">
              <h3>Codecool projects</h3>
            </div>
            <div className="griditem">
              <ProjectLink
                href="https://github.com/BuzinszkiCintia/Codecool_react-and-morty"
                target="_blank"
                rel="noreferrer"
              >
                Codecool-React-and-morty
              </ProjectLink>
            </div>
            <div className="griditem">
              <ProjectLink
                href="https://github.com/BuzinszkiCintia/Codecool-API-Wars"
                target="_blank"
                rel="noreferrer"
              >
                Codecool-API-Wars
              </ProjectLink>
            </div>
            <div className="griditem-2">
              <h3>My projects</h3>
            </div>
            <div className="griditem">
              <ProjectLink
                href="https://buzinszkicintia.github.io/pokemongo/"
                target="_blank"
                rel="noreferrer"
              >
                PokemonGo
              </ProjectLink>
            </div>
          </Grid>
          <Grid>
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
          </Grid>
        </GridsContainer>
      </MainWorkContainer>
    </Element>
  );
};

export default Projects;

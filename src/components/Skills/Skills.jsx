import {
  MainWorkContainer,
  WorkTitleContainer,
} from "../WorkExperience/WorkExperience.styled";
import {
  Card,
  CardContainer,
  ScrollingMainContainer,
  ScrollingContainer,
} from "./Skills.styled";
import border from "../../images/IMG_1395.webp";
import reactPic from "../../images/IMG_1412.webp";
import jsPic from "../../images/IMG_1413.webp";
import cssPic from "../../images/IMG_1414.webp";
import htmlPic from "../../images/IMG_1415.webp";
import nodePic from "../../images/IMG_1416.webp";
import gitHubPic from "../../images/IMG_1417.webp";
import nintexPic from "../../images/IMG_1418.webp";
import sharePointPic from "../../images/IMG_1419.webp";
import { Element } from "react-scroll";

const Skills = () => {
  let itSkills = [
    { id: 1, src: reactPic, label: "React", level: "Beginner" },
    { id: 2, src: jsPic, label: "JavaScript", level: "Beginner" },
    { id: 3, src: cssPic, label: "CSS", level: "Beginner" },
    { id: 4, src: htmlPic, label: "HTML5", level: "Beginner" },
    { id: 5, src: nodePic, label: "Node", level: "Beginner" },
    { id: 6, src: gitHubPic, label: "Git, GitHub", level: "Beginner" },
    {
      id: 7,
      src: nintexPic,
      label: "Nintex Forms, Nintex Workflow",
      level: "Intermadiate",
    },
    {
      id: 8,
      src: sharePointPic,
      label: "SharePoint 2013 On-Premise, SharePoint Designer",
      level: "Intermediate",
    },
  ];

  return (
    <Element id="Skills" name="Skills">
      <MainWorkContainer>
        <WorkTitleContainer>
          <h1>Skills</h1>
          <img src={border} alt="border" />
        </WorkTitleContainer>
        <h1>IT skills</h1>
        <CardContainer>
          {itSkills?.map((itSkill) => {
            return (
              <Card key={itSkill.id}>
                <img src={itSkill.src} alt={itSkill.id} />
                <h2>{itSkill.label}</h2>
                <h3>{itSkill.level}</h3>
              </Card>
            );
          })}
        </CardContainer>
        <ScrollingMainContainer>
          <h1>Personal skills</h1>
          <ScrollingContainer>
            <div class="scrolling-words-box">
              <ul>
                <li style={{ color: "#0c0c0c" }}>Precise work</li>
                <li style={{ color: "#123e31" }}>Multitasking</li>
                <li style={{ color: "#1e5045" }}>Team player attitude</li>
                <li style={{ color: "#1f6651" }}>
                  Quickly understand and apply new information
                </li>
                <li style={{ color: "#1e5045" }}>Technical orientation</li>
                <li style={{ color: "#123e31" }}>Proactivity</li>
              </ul>
            </div>
          </ScrollingContainer>
        </ScrollingMainContainer>
      </MainWorkContainer>
    </Element>
  );
};

export default Skills;

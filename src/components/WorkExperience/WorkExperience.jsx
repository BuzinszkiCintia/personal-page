import {
  MainWorkContainer,
  WorkTitleContainer,
  WorkGrid,
  WorkCircle,
  WorkLabel,
  Text,
  WorkContainer,
} from "./WorkExperience.styled";
import border from "../../images/IMG_1395.PNG";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Education from "../Education/Education";

const WorkExperience = () => {
  return (
    <MainWorkContainer>
      <WorkTitleContainer>
        <h1>Work experience - Education</h1>
        <img src={border} alt="border" />
      </WorkTitleContainer>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <WorkContainer>
          <WorkGrid>
            <WorkCircle className="mkb" />
            <div>
              <Text>2019.04.01. - Present</Text>
              <WorkLabel>IT operator | MKB Bank, Budapest</WorkLabel>
              <Text>
                <ul>
                  Implementing, developing, managing, testing, and
                  troubleshooting Nintex workflows that support procurement
                  processes
                </ul>
                <ul>
                  Providing daily support for users on the Finance/Procurement
                  SharePoint site
                </ul>
                <ul>
                  Carrying out internal audits related to procurement workflows
                </ul>
              </Text>
            </div>
            <WorkCircle className="bb" />
            <div>
              <Text>2018.06.01. - 2019.03.31.</Text>
              <WorkLabel>
                Procurement support intern | Budapest Bank, Budapest
              </WorkLabel>
              <Text>
                <ul>
                  Implementing, developing, managing, testing, and
                  troubleshooting Nintex workflows that support procurement
                  processes
                </ul>
                <ul>
                  Providing daily support for users on the Finance/Procurement
                  SharePoint site
                </ul>
              </Text>
            </div>
          </WorkGrid>
        </WorkContainer>
      </AnimationOnScroll>
      <Education />
    </MainWorkContainer>
  );
};

export default WorkExperience;

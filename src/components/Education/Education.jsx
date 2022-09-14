import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  MainEduContainer,
  EduContainer,
  EduGrid,
  EduCircle,
  EduLabel,
  EduText,
} from "./Education.styles";

const Education = () => {
  return (
    <MainEduContainer>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <EduContainer className="education">
          <EduGrid>
            <EduCircle className="codecool" />
            <div>
              <EduText>2021.10.25. - 2022.03.17.</EduText>
              <EduLabel>Codecool</EduLabel>
              <EduText>Frontend Developer Course</EduText>
            </div>
            <EduCircle className="bge" />
            <div>
              <EduText>2015.09.01.- 2019.03.31.</EduText>
              <EduLabel>Budapest Business School</EduLabel>
              <EduText>
                Business Information Technologist - Specialized in Finance IT
              </EduText>
            </div>
          </EduGrid>
        </EduContainer>
      </AnimationOnScroll>
    </MainEduContainer>
  );
};

export default Education;

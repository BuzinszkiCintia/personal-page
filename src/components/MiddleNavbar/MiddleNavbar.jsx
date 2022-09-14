import {
  MinddleNavbarContainer,
  PictureContainer,
  NavbarIMG,
  NavbarLabel,
  MainContainer,
} from "../MiddleNavbar/MiddleNavbar.styled";
import navbarImg from "../../images/IMG_1396.PNG";

const MiddleNavbar = () => {
  let navItems = [
    "Information",
    "Work experience",
    "Education",
    "Skills",
    "Projects",
    "Other",
  ];

  return (
    <MainContainer>
      <MinddleNavbarContainer>
        {navItems.map((item) => {
          return (
            <PictureContainer key={item}>
              <NavbarLabel>{item}</NavbarLabel>
              <NavbarIMG src={navbarImg} alt={item} />
            </PictureContainer>
          );
        })}
      </MinddleNavbarContainer>
    </MainContainer>
  );
};

export default MiddleNavbar;

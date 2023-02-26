import {
  MinddleNavbarContainer,
  PictureContainer,
  NavbarIMG,
  NavbarLabel,
  MainContainer,
} from "../MiddleNavbar/MiddleNavbar.styled";
import navbarImg from "../../images/IMG_1396.webp";
import { Link } from "react-scroll";

const MiddleNavbar = () => {
  let navItems = [
    "Information",
    "Work experience",
    "Education",
    "Skills",
    "Projects",
  ];

  return (
    <MainContainer>
      <MinddleNavbarContainer>
        {navItems?.map((item) => {
          return (
            <PictureContainer>
              <Link
                to={item}
                href={item}
                spy={true}
                smooth={true}
                duration={500}
                className={item}
                activeClass={item}
              >
                <NavbarLabel> {item}</NavbarLabel>
              </Link>
              <NavbarIMG src={navbarImg} alt="information" />
            </PictureContainer>
          );
        })}
      </MinddleNavbarContainer>
    </MainContainer>
  );
};

export default MiddleNavbar;

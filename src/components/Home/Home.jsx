import profileImage from "../../images/IMG_1398.webp";
import navbarImg from "../../images/IMG_1395.webp";
import {
  NavbarImg,
  ProfileImg,
  Navbar,
  IntroContainer,
  MainContainer,
} from "./Home-styles";

const Home = () => {
  return (
    <MainContainer>
      <Navbar>
        <h3>Cintia Buzinszki | Junior Frontend developer</h3>
      </Navbar>
      <NavbarImg src={navbarImg} alt="navbar-img" />
      <IntroContainer>
        <ProfileImg src={profileImage} alt="profile-img" />
        <h1>Hi, My Name is Cintia Buzinszki.</h1>
        <h2>
          | Budapest based | Junior Frontend developer | Hobby digital artist |
        </h2>
      </IntroContainer>
    </MainContainer>
  );
};

export default Home;

import profileImage from "../../images/IMG_1398.PNG";
import navbarImg from "../../images/IMG_1395.PNG";
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
        <button class="material-icons md-36" id="material-menu">
          <div class="material-icons md-36" id="material-menu">
            menu
          </div>
        </button>
      </Navbar>
      <NavbarImg src={navbarImg} alt="navbar-img" />
      <IntroContainer>
        <ProfileImg src={profileImage} alt="profile-img" />
        <h1>Hi, My Name is Cintia Buzinszki.</h1>
        <h4>
          | Budapest based | Junior Frontend developer | Hobby digital artist |
        </h4>
      </IntroContainer>
    </MainContainer>
  );
};

export default Home;

import profileImage from "../../images/profile.jpg";
import { ProfileImg } from "./Home-styles";

const Home = () => {
  return (
    <div className="main-container">
      <div className="navbar-container">
        <h3>Cintia Buzinszki | Junior Frontend developer</h3>
        <div class="material-icons md-36" id="material-menu">
          menu
        </div>
        <div className="img-container">
          <ProfileImg src={profileImage} alt="profile-img" />
        </div>
        <div className="intro-container">
          <h2>Hi, My Name is Cintia Buzinszki.</h2>
          <h4>
            Budapest based | Soon to be Frontend developer | Hobby digital
            artist |
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;

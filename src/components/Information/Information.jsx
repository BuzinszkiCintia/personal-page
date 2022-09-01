import {
  InfoContainer,
  InfoHolder,
  MainInfoContainer,
  TitleContainer,
} from "./Information.styled";
import border from "../../images/IMG_1395.PNG";

const Information = () => {
  let infos = [
    { icon: "cake", label: "1996.02.06." },
    { icon: "home_pin", label: "4/A. Pillangó Park 1149 Budapest" },
    { icon: "call", label: "+3670 342 8269" },
    { icon: "mail", label: "buzinszki.cintia@gmail.com" },
  ];

  let links = [
    { icon: "link", link: "https://www.linkedin.com/in/cintia-buzinszki/" },
    { icon: "link", link: "https://github.com/BuzinszkiCintia" },
  ];

  return (
    <MainInfoContainer>
      <TitleContainer>
        <h1>Information</h1>
        <img src={border} alt="curve" />
      </TitleContainer>
      <InfoContainer>
        {infos?.map((info) => {
          return (
            <InfoHolder key={info.id}>
              <span class="material-symbols-outlined">{info.icon}</span>
              <label>{info.label}</label>
            </InfoHolder>
          );
        })}
        {links?.map((link) => {
          return (
            <InfoHolder key={link.id}>
              <span class="material-symbols-outlined">{link.icon}</span>
              <a href="url">{link.link}</a>
            </InfoHolder>
          );
        })}
      </InfoContainer>
    </MainInfoContainer>
  );
};

export default Information;

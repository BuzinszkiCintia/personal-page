import {
  InfoContainer,
  InfoHolder,
  MainInfoContainer,
  TitleContainer,
} from "./Information.styled";
import border from "../../images/IMG_1395.PNG";
import { Element } from "react-scroll";

const Information = () => {
  let infos = [
    { id: 1, icon: "cake", label: "1996.02.06." },
    { id: 2, icon: "home_pin", label: "4/A. Pillangó Park 1149 Budapest" },
    { id: 3, icon: "call", label: "+3670 342 8269" },
    { id: 4, icon: "mail", label: "buzinszki.cintia@gmail.com" },
  ];

  let links = [
    {
      id: 5,
      icon: "link",
      link: "https://www.linkedin.com/in/cintia-buzinszki/",
    },
    { id: 6, icon: "link", link: "https://github.com/BuzinszkiCintia" },
  ];

  return (
    <Element id="Information" name="information">
      <MainInfoContainer>
        <TitleContainer>
          <h1>Information</h1>
          <img src={border} alt="border" />
        </TitleContainer>
        <InfoContainer>
          {infos?.map((info) => {
            return (
              <InfoHolder key={info.id}>
                <span className="material-symbols-outlined">{info.icon}</span>
                <label>{info.label}</label>
              </InfoHolder>
            );
          })}
          {links?.map((link) => {
            return (
              <InfoHolder key={link.id}>
                <span className="material-symbols-outlined">{link.icon}</span>
                <a href="url">{link.link}</a>
              </InfoHolder>
            );
          })}
        </InfoContainer>
      </MainInfoContainer>
    </Element>
  );
};

export default Information;

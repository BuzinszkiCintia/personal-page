import styled from "styled-components";
import gridBackground from "../../images/IMG_1399.PNG";
import mkb from "../../images/MKB_Bank_logo.png";
import bb from "../../images/Budapest_bank_logo_png.png";

export const MainWorkContainer = styled.div`
  width: 100%;
  min-height: 70vh;
  h1 {
    font-family: "Courgette", cursive;
    color: rgba(43, 75, 71, 1);
  }
`;
export const WorkTitleContainer = styled.div`
  margin: 1rem 0rem 1rem 0rem;
  img {
    height: 4rem;
    width: 100%;
  }
  h1 {
    position: absolute;
    background-color: white;
    width: 100%;
    margin-top: 12px;
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding-bottom: 1rem;

  @media only screen and (max-width: 480px) {
    justify-content: center;
  }
`;

export const WorkGrid = styled.div`
  width: 95%;

  display: grid;
  grid-template-columns: 1fr 5fr;
  row-gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: url(${gridBackground});
  animation: expand 0.8s ease forwards;
  transition: all 0.8s ease;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 4rem;
  align-content: right;

  @keyframes expand {
    0% {
      transform: translateX(1400px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .mkb {
    background: url(${mkb});
    background-size: contain;
  }

  .bb {
    background: url(${bb});
    background-size: contain;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
    border-radius: 4rem;
  }
`;
export const WorkCircle = styled.div`
  width: 11rem;
  height: 11rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: white;

  @media only screen and (max-width: 480px) {
    width: 7rem;
    height: 7rem;
  }
`;
export const WorkLabel = styled.label`
  font-weight: bolder;
  font-size: large;
  width: 90%;
`;
export const Text = styled.div`
  :first-child {
    text-align: right;
    font-weight: bold;
    font-style: normal;
    padding-right: 1rem;
    padding-top: 1rem;
  }
  text-align: left;
  font-style: italic;

  @media only screen and (max-width: 480px) {
    :first-child {
      padding-bottom: 1rem;
    }
  }
`;

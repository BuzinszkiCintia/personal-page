import styled from "styled-components";

export const Card = styled.div`
  width: 15rem;
  height: 25rem;
  background: rgba(0, 0, 0, 0.04);
  position: relative;
  border: 2px solid rgba(43, 75, 71, 0.7);
  border-radius: 0.3rem;
  margin: 20px;
  background: white;
  display: flex;
  flex-direction: column;

  ::after {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border: 1px solid white;
    border-radius: 0.3rem;
    z-index: -1;
    background-color: rgba(43, 75, 71, 0.3);
  }

  h2,
  h4 {
    font-family: "Courgette", cursive;
    color: rgba(43, 75, 71, 1);
    margin: 0.5rem;
    position: static;
  }

  @media only screen and (max-width: 480px) {
    width: 9rem;
    height: 15rem;
    :nth-child(7),
    :nth-child(8) {
      h2 {
        font-size: small;
      }
    }
  }
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
`;

export const ScrollingMainContainer = styled.div`
  width: 100%;
  height: 40vh;

  h2 {
    font-family: "Courgette", cursive;
    color: rgba(43, 75, 71, 1);
    margin-bottom: 0;
  }
`;
export const ScrollingContainer = styled.div`
  @media only screen and (max-width: 480px) {
    width: 90%;
    text-align: left;
  }
  @media only screen and (min-width: 481px) {
    width: 45%;
    height: 40px;
    overflow: hidden;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;

    :before {
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      content: "";
      height: 10px;
      position: absolute;
    }
    :after {
      left: 0;
      bottom: 0;
      z-index: 1;
      width: 100%;
      content: "";
      height: 10px;
      position: absolute;
    }

    ul {
      margin: 0;
      padding: 0;
      -webkit-animation: scrollUp 5s ease-in-out infinite normal;
      animation: scrollUp 5s ease-in-out infinite normal;
    }
    ul li {
      opacity: 1;
      height: 20px;
      padding: 10px;
      list-style: none;
      font-weight: bold;
      font-style: italic;
      font-size: larger;
    }

    @-webkit-keyframes scrollUp {
      from {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      to {
        -webkit-transform: translateY(-80%);
        transform: translateY(-80%);
      }
    }

    @keyframes scrollUp {
      from {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
      to {
        -webkit-transform: translateY(-80%);
        transform: translateY(-80%);
      }
    }
  }
`;

import styled from "styled-components";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("/Config/images/bg.png");
  }
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 350px);
  max-height: 100%;
  padding: 0rem calc((100vw - 650px) / 2);
  justify-content: center;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 2rem);
  margin-bottom: 2rem;
  color: #ffc500;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #1f7ddb;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;

export const BuyLink = styled.a`
  z-index: 3;
`;

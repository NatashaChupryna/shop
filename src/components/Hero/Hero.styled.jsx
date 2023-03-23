import styled from '@emotion/styled';
import background from '../../images/HeroBackground@2x.png';

export const HeroBackground = styled.div`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  @media screen and (min-width: 768px) {
    background-size: cover;
    width: 100%;
    height: 700px;
  }
`;

export const HeroInfo = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -35%);
  width: 180px;
  height: 160px;
  padding: 20px;
  border-radius: 15px;
  background: rgb(254, 254, 255);
  background: linear-gradient(
    90deg,
    rgba(254, 254, 255, 0.5) 0%,
    rgb(251, 246, 240, 0.6) 35%,
    rgb(251, 246, 240, 0.6) 100%
  );

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const HeroText = styled.p`
  font-size: 13px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

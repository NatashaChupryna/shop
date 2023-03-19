import styled from '@emotion/styled';
import background from '../../images/IMAGE1@1x.png';

export const InfoSection = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    gap: 90px;
  }
`;

export const InfoImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  width: 240px;
  min-height: 250px;
  @media screen and (min-width: 768px) {
    background-size: cover;
    width: 500px;
    height: 550px;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 10px;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    padding-top: 150px;
    gap: 20px;
    width: 500px;
  }
`;

export const InfoTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const InfoText1 = styled.p`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 8px 12px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  touch-action: manipulation;

  &::after {
    content: '';
    background-color: #f0e67a;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  &:hover::after {
    top: 0px;
    left: 0px;
  }
  @media (min-width: 768px) {
    .button-52 {
      padding: 15px 25px;
    }
  }
`;

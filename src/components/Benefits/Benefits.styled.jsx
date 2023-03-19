import styled from '@emotion/styled';
import background from '../../images/IMAGE2@1x.png';

export const BenefitsSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  background-color: #fbf6f0;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const BenefitsImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  width: 240px;
  min-height: 250px;
  @media screen and (min-width: 768px) {
    background-size: cover;
    height: 550px;
    width: 500px;
  }
`;

export const BenefitsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    width: 500px;
    padding: 0 30px;
    padding-top: 150px;
  }
`;

export const BenefitsTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const BenefitsText1 = styled.p`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

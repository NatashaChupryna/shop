import styled from '@emotion/styled';
import img1 from '../../images/Rewards/img1.png';
import img2 from '../../images/Rewards/img2.png';
import img3 from '../../images/Rewards/img3.png';
import img4 from '../../images/Rewards/img4.png';

export const RewardsSection = styled.section`
  background-color: #fbf6f0;
  padding: 30px 0;
`;

export const RewardsList = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const RewardsItem1 = styled.section`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: url(${img1});
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
export const RewardsItem2 = styled.section`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: url(${img4});
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
export const RewardsItem3 = styled.section`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: url(${img3});
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
export const RewardsItem4 = styled.section`
  width: 50px;
  height: 50px;
  background-size: contain;
  background-image: url(${img2});
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

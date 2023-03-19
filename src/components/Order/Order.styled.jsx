import styled from '@emotion/styled';
// import { FaRegTimesCircle } from 'react-icons/fa';

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  justify-content: space-between;
  gap: 4px;
  height: 100%;
  /* &FaRegTimesCircle:hover {
    cursor: pointer;
  } */
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ProductName = styled.p`
  font-size: 14px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

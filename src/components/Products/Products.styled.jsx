import styled from '@emotion/styled';

export const ProductList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`;
export const Product = styled.li`
  /* flex-basis: calc((100% - 30px) / 2); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 8px 8px 0 0;
  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 4px 8px;
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
    padding: 8px 15px;
  }
`;

export const ProductName = styled.p`
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

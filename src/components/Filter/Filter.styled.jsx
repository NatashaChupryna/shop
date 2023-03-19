import styled from '@emotion/styled';

export const ProductsTitle = styled.h2`
  text-align: center;
  margin-top: 30px;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Categories = styled.ul`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const Category = styled.li`
  padding: 8px 12px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background-color: rgb(240, 230, 122, 0.5);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 20px;
    font-size: 20px;
  }
`;

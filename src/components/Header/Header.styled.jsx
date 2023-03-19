import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fbf6f0;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Logo = styled.span`
  text-transform: uppercase;
  padding-bottom: 20px;
  padding-top: 15px;
  font-weight: bold;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const NavLink = styled.p`
  transition: all 200ms ease;
  padding-bottom: 20px;
  padding-top: 15px;
  &:hover {
    opacity: 0.5;
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Cart = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 999;
  padding: 12px;
  min-width: 200px;
  min-height: 200px;
  font-size: 18px;
  background-color: #fbf6f0;
  box-shadow: rgba(251, 255, 0, 0.15) 0px 15px 25px,
    rgba(251, 255, 0, 0.15) 0px 5px 10px;
  @media screen and (min-width: 768px) {
    top: 70px;
    min-width: 300px;
  }
`;

export const TotalSum = styled.p`
  margin-top: 20px;
  font-weight: 600;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    top: 70px;
    min-width: 300px;
    font-size: 18px;
  }
`;

import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: #fbf6f0;
  padding: 0 20px;
  padding-bottom: 20px;
`;

export const FooterTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ContactlLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  &:hover {
    opacity: 0.5;
  }
`;

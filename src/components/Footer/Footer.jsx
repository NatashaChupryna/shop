import React from 'react';
import { StyledFooter, FooterTitle, ContactlLink } from './Footer.styled';

export function Footer() {
  return (
    <StyledFooter>
      <div>
        <ContactlLink href="mailto:info@helloeverist.com">
          info@helloeverist.com
        </ContactlLink>
      </div>
      <div>
        <FooterTitle>© 2023 Everist</FooterTitle>
      </div>
    </StyledFooter>
  );
}

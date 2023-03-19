import React from 'react';
import { HeroBackground, HeroInfo, HeroTitle, HeroText } from './Hero.styled';

export function HeroSection() {
  return (
    <HeroBackground>
      <HeroInfo>
        <HeroTitle>Eco for everyone</HeroTitle>
        <HeroText>
          We believe that big change happens when small changes. Eco can be for
          everyone and we're here to prove it. Imperfect environmentalists
          welcome.
        </HeroText>
      </HeroInfo>
    </HeroBackground>
  );
}

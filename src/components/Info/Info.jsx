import React from 'react';
import {
  InfoSection,
  InfoImage,
  InfoText,
  InfoTitle,
  InfoText1,
  Button,
} from './Info.styled';

export function Info({ scroll }) {
  return (
    <InfoSection>
      <InfoImage></InfoImage>
      <InfoText>
        <InfoTitle>It`s the future of beauty</InfoTitle>
        <InfoText1>
          Our products are thoughtfully designed, inside and out, as is the way
          we do business.
        </InfoText1>
        <Button onClick={scroll}>
          Shop now<a href="#products">.</a>
        </Button>
      </InfoText>
    </InfoSection>
  );
}

import React from 'react';
import {
  InfoSection,
  InfoImage,
  InfoText,
  InfoTitle,
  InfoText1,
  Button,
} from './Info.styled';

export function Info() {
  return (
    <InfoSection>
      <InfoImage></InfoImage>
      <InfoText>
        <InfoTitle>It`s the future of beauty</InfoTitle>
        <InfoText1>
          Our products are thoughtfully designed, inside and out, as is the way
          we do business.
        </InfoText1>
        <Button>Shop now</Button>
      </InfoText>
    </InfoSection>
  );
}
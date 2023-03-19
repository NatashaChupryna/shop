import React from 'react';
import {
  BenefitsSection,
  BenefitsImage,
  BenefitsText,
  BenefitsTitle,
  BenefitsText1,
} from './Benefits.styled';

export function Benefits() {
  return (
    <BenefitsSection>
      <BenefitsText>
        <BenefitsTitle>It works, we pinky promise.</BenefitsTitle>
        <BenefitsText1>
          We know that if your personal care products don't make your hair and
          skin feel amazing, nothing else matters. We have high expectations of
          our hair and body care and our formulas won't disappoint.
        </BenefitsText1>
      </BenefitsText>

      <BenefitsImage></BenefitsImage>
    </BenefitsSection>
  );
}

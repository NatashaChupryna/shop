import React from 'react';
import {
  RewardsSection,
  RewardsList,
  RewardsItem1,
  RewardsItem2,
  RewardsItem3,
  RewardsItem4,
} from './Rewards.styled';

export function Rewards() {
  return (
    <RewardsSection>
      <RewardsList>
        <RewardsItem1></RewardsItem1>
        <RewardsItem2></RewardsItem2>
        <RewardsItem3></RewardsItem3>
        <RewardsItem4></RewardsItem4>
      </RewardsList>
    </RewardsSection>
  );
}

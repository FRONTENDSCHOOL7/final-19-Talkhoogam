import React from 'react';
import BasicHeader from '../components/header/BasicHeader';
import { GroupSection } from '../styles/GatheringStyled';
import { LayoutInsideStyle, LayoutStyle } from '../styles/LayoutStyled';
import Footer from '../components/footer/Footer';
import {
  AllGroups,
  JoinedGroups,
  RecommendedGroups,
} from '../components/Gathering/SampleList';

export default function Gathering() {
  return (
    <LayoutStyle>
      <BasicHeader />
      <LayoutInsideStyle>
        <GroupSection>
          {/* 참여중인 모임 */}
          <JoinedGroups />
          {/* 추천하는 모임 */}
          <RecommendedGroups />
          {/* 모든 모임 */}
          <AllGroups />
        </GroupSection>
      </LayoutInsideStyle>
      <Footer />
    </LayoutStyle>
  );
}

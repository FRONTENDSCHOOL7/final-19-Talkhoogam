import React from 'react';
import GatheringItems from '../components/Gathering/GatheringItems';
import BasicHeader from '../components/header/BasicHeader';
import { GroupArticle, GroupSection } from '../styles/GatheringStyled';
import { LayoutInsideStyle, LayoutStyle } from '../styles/LayoutStyled';
import Footer from '../components/footer/Footer';
import GatheringList from '../components/Gathering/GatheringList';

export default function Gathering() {
  const dataGroups = [];

  const dataJoinGroups = [];

  const dataRecommendGroups = [];

  return (
    <LayoutStyle>
      <BasicHeader />
      <LayoutInsideStyle>
        <GroupSection>
          <GroupArticle>
            <h3>추천 모임</h3>
            <GatheringList data={dataRecommendGroups} />
          </GroupArticle>

          <GroupArticle>
            <h3>참여하고 있는 모임</h3>
            <GatheringList data={dataJoinGroups} />
          </GroupArticle>

          <GroupArticle>
            <h3>모임 전체 보기</h3>
            <GatheringList data={dataGroups} />
          </GroupArticle>
        </GroupSection>
      </LayoutInsideStyle>
      <Footer />
    </LayoutStyle>
  );
}

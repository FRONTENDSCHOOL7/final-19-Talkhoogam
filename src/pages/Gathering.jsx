import React from "react";
import styled from "styled-components";
import GatheringItems from "../components/Gathering/GatheringItems";

export default function Gathering() {
  const dataGroups = "";

  const dataJoinGroups = "";

  const dataRecommendGroups = "";

  const GroupSection = styled.section`
    height: 100vh;
    border: 1px solid var(--border-color);
    padding: 20px;
    background-color: var(--background-color);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      color: var(--color-mainColor);
      font-size: 24px;
      font-weight: bold;
    }
  `;

  const DivLine = styled.div`
    width: 80%;
    border: 1px solid var(--border-color);
    margin: 20px auto 10px;
  `;

  const GroupArticle = styled.article`
    height: 25vh;
    text-align: center;

    h3 {
      color: var(--color-mainColor);
      font-size: 17px;
      margin-bottom: 10px;
    }
  `;

  const GatheringUl = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  return (
    <>
      <GroupSection>
        <h2>모임 페이지</h2>
        <DivLine />
        <GroupArticle>
          <h3>추천 모임</h3>
          {/* 리스트를 어떻게 뽑을지를 고민해보고 넣을지 결정하는게 좋을 것 같아요. */}
          {dataRecommendGroups ? (
            <GatheringUl>
              <GatheringItems dataRecommendGroups={dataRecommendGroups} />
            </GatheringUl>
          ) : (
            <strong>현재 참여할 수 있는 모임이 없습니다.</strong>
          )}
          <GatheringUl />
        </GroupArticle>
        <DivLine />

        <GroupArticle>
          <h3>참여하고 있는 모임</h3>
          {dataJoinGroups ? (
            <GatheringUl>
              <GatheringItems dataJoinGroups={dataJoinGroups} />
            </GatheringUl>
          ) : (
            <strong>현재 참여하고 있는 그룹이 없습니다.</strong>
          )}
        </GroupArticle>
        <DivLine />

        <GroupArticle>
          <h3>모임 전체 보기</h3>
          <GatheringUl>
            {dataGroups ? (
              <GatheringItems dataGroups={dataGroups} />
            ) : (
              <strong>현재 참여할 수 있는 모임이 없습니다.</strong>
            )}
          </GatheringUl>
        </GroupArticle>
      </GroupSection>
    </>
  );
}

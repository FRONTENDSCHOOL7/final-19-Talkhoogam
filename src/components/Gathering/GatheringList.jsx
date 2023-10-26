import React from 'react';
import { GatheringUl } from '../../styles/GatheringStyled';
import GatheringItems from './GatheringItems';

export default function GatheringList({ data }) {
  return (
    <>
      {data.length !== 0 ? (
        <GatheringUl>
          <GatheringItems data={data} />
        </GatheringUl>
      ) : (
        <strong>게시글을 찾을 수 없습니다.</strong>
      )}
    </>
  );
}

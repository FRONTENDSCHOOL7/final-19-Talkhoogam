import React from 'react';
import { GatheringItemsStyle } from '../../styles/GatheringStyled';

export default function GatheringItems({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <GatheringItemsStyle key={item.id}>
            <img
              className="post-thumbnail"
              src={
                item.image !== null ? item.image : 'http://placehold.it/100X100'
              }
              alt={`${item.tit}의 게시글 이미지입니다.`}
            />
            <strong className="post-tit">{item.tit}</strong>
            <p className="post-info">{item.username}</p>
          </GatheringItemsStyle>
        );
      })}
    </>
  );
}

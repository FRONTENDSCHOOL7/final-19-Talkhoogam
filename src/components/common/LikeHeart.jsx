import React, { useState } from 'react';
import IconHeart from '../../assets/icons/heart.svg';
import IconHeartActive from '../../assets/icons/heart-avtive.svg';
import PostHeartAPI from '../../api/post/PostHeartAPi';
import PostUnHeartAPI from '../../api/post/PostUnHeartAPI';

export default function LikeHeart({ item }) {
  // 좋아요
  const { onHeart } = PostHeartAPI(item.id);
  const handleHeart = async () => {
    try {
      const data = await onHeart();
      console.log('게시글에 좋아요를 눌렀습니다.');
    } catch (error) {
      console.error('게시글에 좋아요를 누르는데 실패하였습니다.', error);
    }
  };

  // 좋아요 취소
  const { unHeart } = PostUnHeartAPI(item.id);
  const handleUnHeart = async () => {
    try {
      const data = await unHeart();
      console.log('게시글에 좋아요를 취소했습니다.');
    } catch (error) {
      console.error('좋아요를 취소하는데 실패하였습니다.', error);
    }
  };

  // 현재 하트 상태
  const [hearted, setHearted] = useState(item.hearted);

  // 하트 클릭시 작동하는 함수
  const heartClicked = () => {
    if (hearted) {
      handleUnHeart();
      setHearted(false);
    } else {
      handleHeart();
      setHearted(true);
    }
  };

  return (
    <>
      {hearted ? (
        <button>
          <img
            className="social-icon"
            onClick={heartClicked}
            src={IconHeartActive}
            alt="좋아요 취소"
          />
        </button>
      ) : (
        <button>
          <img
            className="social-icon"
            onClick={heartClicked}
            src={IconHeart}
            alt="좋아요"
          />
        </button>
      )}
    </>
  );
}

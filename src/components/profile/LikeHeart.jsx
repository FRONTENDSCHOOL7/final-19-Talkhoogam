import React from 'react';
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

  return (
    <>
      {item.hearted ? (
        <button>
          <img
            onClick={handleUnHeart}
            src={IconHeartActive}
            alt="좋아요 취소"
          />
        </button>
      ) : (
        <button>
          <img onClick={handleHeart} src={IconHeart} alt="좋아요" />
        </button>
      )}
    </>
  );
}

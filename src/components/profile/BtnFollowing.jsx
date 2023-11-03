import React, { useState } from 'react';
import { BtnFollow } from '../../styles/FollowStyled';

export default function BtnFollowing({ handleFollow, handleUnFollow }) {
  const [checkedActive, setCheckedActive] = useState(true);

  // 팔로우버튼 클릭시
  function followClicked() {
    handleFollow();
    setCheckedActive(false);
  }

  // 취소버튼 클릭시
  function cancelClicked() {
    handleUnFollow();
    setCheckedActive(true);
  }

  return (
    <>
      {checkedActive ? (
        <BtnFollow onClick={followClicked} className="btn-follow">
          팔로잉
        </BtnFollow>
      ) : (
        <BtnFollow onClick={cancelClicked} className="btn-cancel">
          취소
        </BtnFollow>
      )}
    </>
  );
}

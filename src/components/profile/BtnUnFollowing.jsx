import React, { useState } from 'react';
import { BtnFollow } from '../../styles/FollowStyled';

export default function BtnUnFollowing({ handleFollow, handleUnFollow }) {
  const [checkedActive, setCheckedActive] = useState(true);

  // 언팔로잉버튼 클릭시
  function unFollowClicked() {
    setCheckedActive(false);
    handleUnFollow();
  }

  // 취소버튼 클릭시
  function cancelClicked() {
    setCheckedActive(true);
    handleFollow();
  }

  return (
    <>
      {checkedActive ? (
        <BtnFollow onClick={unFollowClicked} className="btn-un-follow">
          언팔로잉
        </BtnFollow>
      ) : (
        <BtnFollow onClick={cancelClicked} className="btn-cancel">
          취소
        </BtnFollow>
      )}
    </>
  );
}

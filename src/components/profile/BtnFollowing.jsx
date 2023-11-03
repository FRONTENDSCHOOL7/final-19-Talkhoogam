import React, { useState } from 'react';
import { BtnFollow } from '../../styles/FollowStyled';
import FollowAPI from '../../api/profile/FollowAPI';
import UnFollowAPI from '../../api/profile/UnFollowAPI';

export default function BtnFollowing({ item }) {
  const [checkedActive, setCheckedActive] = useState(true);

  // 팔로잉
  const { followUser } = FollowAPI(item.accountname);
  const handleFollow = async () => {
    try {
      const res = await followUser();
      console.log(res);
      console.log('팔로우 하는데 성공하였습니다.');
    } catch (error) {
      console.error('팔로우 하는데 실패하였습니다.', error);
    }
  };

  // 언팔로잉
  const { unFollowUser } = UnFollowAPI(item.accountname);
  const handleUnFollow = async () => {
    try {
      const res = await unFollowUser();
      console.log(res);
      console.log('언팔로우 하는데 성공하였습니다.');
    } catch (error) {
      console.error('언팔로우 하는데 실패하였습니다.', error);
    }
  };

  // 팔로우버튼 클릭시
  function followClicked() {
    // followingFunc()
    handleFollow();
    setCheckedActive(false);
  }

  // 취소버튼 클릭시
  function cancelClicked() {
    // unFollowFunc();
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

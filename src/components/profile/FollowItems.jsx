import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FollowLiStyle } from '../../styles/FollowStyled';
import { useRecoilValue } from 'recoil';
import accountname from '../../recoil/accountname';
import BtnUnFollowing from './BtnUnFollowing';
import BtnFollowing from './BtnFollowing';

export default function FollowItems({ item }) {
  // 클릭한 유저 페이지로 이동
  const navigate = useNavigate();
  const navigateUserProfile = () => {
    navigate(`/profile/${item.accountname}`);
  };

  // 로그인한 유저의 accountName
  const loginAccount = useRecoilValue(accountname);
  return (
    <>
      <FollowLiStyle>
        <button className="btn-user-link" onClick={navigateUserProfile}>
          <img src={item.image} alt="유저 프로필 이미지" />
          <div className="form-user-info">
            <strong className="user-name">{item.username}</strong>
            <p className="user-info">{item.intro}</p>
          </div>
        </button>
        {item.accountname !== loginAccount && item.isfollow ? (
          <BtnUnFollowing item={item} />
        ) : (
          <BtnFollowing item={item} />
        )}
      </FollowLiStyle>
    </>
  );
}

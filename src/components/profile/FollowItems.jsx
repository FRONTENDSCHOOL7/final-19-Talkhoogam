import React, { useState } from 'react';
import { FollowLiStyle, BtnFollow } from '../../styles/FollowStyled';
import { useNavigate } from 'react-router-dom';

export function FollowingItems({ item }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const navigate = useNavigate();
  // 클릭시 유저 프로필창으로 이동
  const navigateUserProfile = () => {
    // 유저프로필 페이지 등록시 수정 필요
    navigate(`/profile/${item.accountname}`);
  };

  return (
    <FollowLiStyle>
      <button className="btn-user-link" onClick={navigateUserProfile}>
        <img src={item.image} alt="유저 프로필 이미지" />
        <div className="form-user-info">
          <strong className="user-name">{item.username}</strong>
          <p className="user-info">{item.intro}</p>
        </div>
      </button>
      {isFollowing ? (
        <BtnFollow
          className="btn-unfollow"
          onClick={() => setIsFollowing(false)}
        >
          언팔로우
        </BtnFollow>
      ) : (
        <BtnFollow className="btn-cancel" onClick={() => setIsFollowing(true)}>
          취소
        </BtnFollow>
      )}
    </FollowLiStyle>
  );
}

export function FollowerItems({ item }) {
  const [isFollowing, setIsFollowing] = useState(true);
  const navigate = useNavigate();
  // 클릭시 유저 프로필창으로 이동
  const navigateUserProfile = () => {
    // 유저프로필 페이지 등록시 수정 필요
    navigate(`/profile/${item.accountname}`);
  };
  return (
    <FollowLiStyle>
      <button className="btn-user-link" onClick={navigateUserProfile}>
        <img src={item.image} alt="유저 프로필 이미지" />
        <div className="form-user-info">
          <strong className="user-name">{item.username}</strong>
          <p className="user-info">{item.intro}</p>
        </div>
      </button>
      {isFollowing ? (
        <BtnFollow className="btn-follow" onClick={() => setIsFollowing(false)}>
          팔로잉
        </BtnFollow>
      ) : (
        <BtnFollow className="btn-cancel" onClick={() => setIsFollowing(true)}>
          취소
        </BtnFollow>
      )}
    </FollowLiStyle>
  );
}

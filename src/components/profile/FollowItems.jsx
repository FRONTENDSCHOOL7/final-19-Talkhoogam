import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FollowLiStyle } from '../../styles/FollowStyled';
import { useRecoilValue } from 'recoil';
import accountname from '../../recoil/accountname';
import BtnUnFollowing from './BtnUnFollowing';
import BtnFollowing from './BtnFollowing';
import FollowAPI from '../../api/profile/FollowAPI';
import UnFollowAPI from '../../api/profile/UnFollowAPI';

export default function FollowItems({ item }) {
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
        {item.accountname !== loginAccount &&
          (item.isfollow ? (
            <BtnUnFollowing
              item={item}
              handleFollow={handleFollow}
              handleUnFollow={handleUnFollow}
            />
          ) : (
            <BtnFollowing
              item={item}
              handleFollow={handleFollow}
              handleUnFollow={handleUnFollow}
            />
          ))}
      </FollowLiStyle>
    </>
  );
}

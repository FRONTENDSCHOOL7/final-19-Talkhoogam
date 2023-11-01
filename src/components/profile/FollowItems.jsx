import React, { useEffect, useState } from 'react';
import { FollowLiStyle, BtnFollow } from '../../styles/FollowStyled';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import accountname from '../../recoil/accountname';
import FollowingListAPI from '../../api/profile/FollowingListAPI';

export default function FollowItems({ item, userAccountName }) {
  // 클릭시 유저 프로필창으로 이동
  const navigate = useNavigate();
  const navigateUserProfile = () => {
    navigate(`/profile/${item.accountname}`);
  };

  // 로그인한 유저의 accountName
  const loginAccountName = useRecoilValue(accountname);
  console.log('userAccountName', userAccountName);
  console.log('loginAccountName', loginAccountName);

  // 로그인한 유저의 팔로잉리스트
  const [loginFollowList, setLoginFollowList] = useState([]);
  const { getFollowingList } = FollowingListAPI(loginAccountName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const followingData = await getFollowingList();
        setLoginFollowList(followingData);
      } catch (error) {
        console.error('팔로잉 리스트를 불러오는데 실패하였습니다.', error);
      }
    };
    fetchData();
  }, []);
  console.log('loginFollowList : ', loginFollowList);

  // 팔로우 / 언팔로우 버튼
  function BtnFollows({ item }) {
    const [btnActive, setBtnActive] = useState(true);
    console.log('값 확인 : ', loginFollowList.indexOf(item.accountname));

    // 팔로잉버튼
    function FollowingBtn() {
      return (
        <>
          {btnActive ? (
            <BtnFollow
              className="btn-following"
              onClick={() => {
                setBtnActive(false);
              }}
            >
              팔로잉
            </BtnFollow>
          ) : (
            <BtnFollow
              className="btn-cancel"
              onClick={() => {
                setBtnActive(true);
              }}
            >
              취소
            </BtnFollow>
          )}
        </>
      );
    }

    // 언팔로잉 버튼
    function UnFollowingBtn() {
      return (
        <>
          {btnActive ? (
            <BtnFollow
              className="btn-un-following"
              onClick={() => {
                setBtnActive(false);
              }}
            >
              언팔로잉
            </BtnFollow>
          ) : (
            <BtnFollow
              className="btn-cancel"
              onClick={() => {
                setBtnActive(true);
              }}
            >
              취소
            </BtnFollow>
          )}
        </>
      );
    }
    return (
      <>
        {item.accountname !== loginAccountName &&
          (!item.isfollow ? <FollowingBtn /> : <UnFollowingBtn />)}
      </>
    );
  }

  return (
    <FollowLiStyle>
      <button className="btn-user-link" onClick={navigateUserProfile}>
        <img src={item.image} alt="유저 프로필 이미지" />
        <div className="form-user-info">
          <strong className="user-name">{item.username}</strong>
          <p className="user-info">{item.intro}</p>
        </div>
      </button>
      <BtnFollows item={item} />
    </FollowLiStyle>
  );
}

import React, { useEffect, useState } from 'react';
import FollowingListAPI from '../../api/profile/FollowingListAPI';
import { LayoutInsideStyle, LayoutStyle } from '../../styles/LayoutStyled';
import BasicHeader from '../../components/header/BasicHeader';
import Footer from '../../components/footer/Footer';
import { FollowListStyle } from '../../styles/FollowStyled';
import FollowItems from '../../components/profile/FollowItems';
import { useParams } from 'react-router-dom';
import AccountNameProfileAPI from '../../api/post/AcountNameProfileAPI';

export default function Followings() {
  // userAccountName 불러오기
  const params = useParams();
  const userAccountName = params.accountname;
  const { getAccountNameProfile } = AccountNameProfileAPI(userAccountName);

  // 어카운트 네임 유저의 팔로잉 리스트 받아오기
  const [userFollowingList, setUserFollowingList] = useState([]);
  const { getFollowingList } = FollowingListAPI(userAccountName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getFollowingList();
        setUserFollowingList(userInfo);
      } catch (error) {
        console.error('데이터를 불러오는데 실패하였습니다.', error);
      }
    };
    fetchData();
  }, []);
  // console.log('userFollowingList', userFollowingList);

  // 팔로잉리스트
  function FollowingList() {
    return (
      <FollowListStyle>
        {userFollowingList.length !== 0 ? (
          userFollowingList.map((item) => {
            return <FollowItems item={item} key={item.accountname} />;
          })
        ) : (
          <li>
            <strong className="error-list">
              현재 팔로잉하고 있는 유저가 없습니다.
            </strong>
          </li>
        )}
      </FollowListStyle>
    );
  }

  return (
    <LayoutStyle>
      <BasicHeader />
      <LayoutInsideStyle>
        <FollowingList />
      </LayoutInsideStyle>
      <Footer />
    </LayoutStyle>
  );
}

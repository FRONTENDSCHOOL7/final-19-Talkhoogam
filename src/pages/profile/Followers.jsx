import React, { useEffect, useState } from 'react';
import FollowerListAPI from '../../api/profile/FollowerListAPI';
import { LayoutInsideStyle, LayoutStyle } from '../../styles/LayoutStyled';
import BasicHeader from '../../components/header/BasicHeader';
import Footer from '../../components/footer/Footer';
import { FollowListStyle } from '../../styles/FollowStyled';
import { useParams } from 'react-router-dom';
import AccountNameProfileAPI from '../../api/post/AcountNameProfileAPI';
import FollowItems from '../../components/profile/FollowItems';

export default function Followers() {
  // userAccountName 불러오기
  const params = useParams();
  const userAccountName = params.accountname;
  const { getAccountNameProfile } = AccountNameProfileAPI(userAccountName);

  // 어카운트 네임 유저의 팔로워 리스트 받아오기
  const [userFollowerList, setUserFollowerList] = useState([]);
  const { getFollowerList } = FollowerListAPI(userAccountName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getFollowerList();
        setUserFollowerList(userInfo);
      } catch (error) {
        console.error('데이터를 불러오는데 실패하였습니다.', error);
      }
    };
    fetchData();
  }, []);
  // console.log('userFollowerList : ', userFollowerList);

  // 팔로워리스트
  function FollowerList() {
    return (
      <FollowListStyle>
        {userFollowerList.length !== 0 ? (
          userFollowerList.map((item) => {
            return (
              <FollowItems
                userAccountName={userAccountName}
                item={item}
                key={item.accountname}
              />
            );
          })
        ) : (
          <li>
            <strong className="error-list">
              현재 팔로우하고 있는 유저가 없습니다.
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
        <FollowerList />
      </LayoutInsideStyle>
      <Footer />
    </LayoutStyle>
  );
}

import React, { useEffect, useState } from 'react';
import FollowerListAPI from '../../api/profile/FollowerListAPI';
import { LayoutInsideStyle, LayoutStyle } from '../../styles/LayoutStyled';
import BasicHeader from '../../components/header/BasicHeader';
import Footer from '../../components/footer/Footer';
import { FollowListStyle } from '../../styles/FollowStyled';
import { FollowerItems } from '../../components/profile/FollowItems';

export default function Followers() {
  // 유저정보
  const [loading, setLoading] = useState(false);
  const [followerList, setFollowerList] = useState([]);
  const { getFollowerList } = FollowerListAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userInfo = await getFollowerList();
        setFollowerList(userInfo);
        setLoading(false);
      } catch (error) {
        console.error('데이터를 불러오는데 실패하였습니다.', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 팔로워리스트
  function FollowerList() {
    return (
      <FollowListStyle>
        {followerList.length !== 0 ? (
          followerList.map((item) => {
            return <FollowerItems item={item} key={item.accountname} />;
          })
        ) : (
          <strong className="error-list">
            현재 팔로우하고 있는 유저가 없습니다.
          </strong>
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

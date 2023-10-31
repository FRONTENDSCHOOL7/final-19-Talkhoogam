import React, { useEffect, useState } from 'react';
import FollowingListAPI from '../../api/profile/FollowingListAPI';
import { LayoutInsideStyle, LayoutStyle } from '../../styles/LayoutStyled';
import BasicHeader from '../../components/header/BasicHeader';
import Footer from '../../components/footer/Footer';
import { FollowListStyle } from '../../styles/FollowStyled';
import { FollowingItems } from '../../components/profile/FollowItems';

export default function Followings() {
  // 유저정보
  const [loading, setLoading] = useState(false);
  const [followingList, setFollowingList] = useState([]);
  const { getFollowingList } = FollowingListAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userInfo = await getFollowingList();
        setFollowingList(userInfo);
        setLoading(false);
      } catch (error) {
        console.error('데이터를 불러오는데 실패하였습니다.', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(followingList);

  // 팔로잉리스트
  function FollowingList() {
    return (
      <FollowListStyle>
        {followingList.length !== 0 ? (
          followingList.map((item) => {
            return <FollowingItems item={item} key={item.accountname} />;
          })
        ) : (
          <strong className="error-list">
            현재 팔로잉하고 있는 유저가 없습니다.
          </strong>
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

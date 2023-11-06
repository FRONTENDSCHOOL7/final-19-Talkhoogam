import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import styled from "styled-components";
import ImgLayes from "../../assets/icons/icon-img-layers.svg";
import MyFeedListAPI from "../../api/post/MyFeedListAPI.jsx";
import Empty from "../../components/empty/Empty";
import LogoImg from "../../assets/images/Logo.png";
import NoneImg from "../../assets/icons/none.png";

export default function LayerFeed(accountname) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { getMyFeedListAPI } = MyFeedListAPI(accountname);
  const [myFeedData, setMyFeedData] = useState(() => {});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const list = await getMyFeedListAPI();
        setMyFeedData(list);
        setLoading(false);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [accountname]);
  console.log("myFeedData : ", myFeedData);
  //console.log(accountname.accountname)

  return (
    <Layer>
      {myFeedData ? (
        myFeedData.post.map((item, index) => (
          <div className="feedlayer" key={index}>
            <button className="content">
              {" "}
              {/*피드가 추가될때마다 content div 추가*/}
              <MoreButton onClick={() => navigate(`/post/detail/${item.id}`)}>
                <img src={item.image} alt="예시 사진" className="bookImg"></img>
                {item.image.length >= 1 ? (
                  <img
                    src={ImgLayes}
                    alt="이미지 2장 이상일 경우 나타나는 아이콘"
                    className="bookMultiple"
                  ></img>
                ) : (
                  <p className="a11y-hidden">1장이에용</p>
                )}
              </MoreButton>
            </button>
          </div>
        ))
      ) : (
        <>
        <h1 className="a11y-hidden">팔로우가 존재하지 않습니다.</h1>
        <Empty image={LogoImg} alt={"404페이지"}>
          유저를 검색해 팔로우 해보세요!
        </Empty>
      </>
      )}
    </Layer>
  );
}
const MoreButton = styled.div`
  cursor: pointer;
  height: 160px;
`;
const Layer = styled.div`
  display: grid; // 재웅 그리드로 바꾸고 도망갑니다
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 16px;
  margin-bottom: 70px;
  padding-bottom: 10px;
  .content {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    padding: 0;
  }

  & .bookImg {
    object-fit: cover;
    width: 100%;
    transition: 0.2s all ease-in-out;
  }
  .feedlayer .bookImg {
    //책표지 api 사이즈 따라서 수정
    box-sizing: border-box;
    min-width: 108px;
    min-height: 160px;
  }
  .feedlayer .bookMultiple {
    position: absolute;
    top: 3px;
    right: 3px;
  }
  .bookImg:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconMessage from "../assets/icons/icon-message-circle.svg";
import IconDot from "../assets/icons/s-icon-more-vertical.svg";
import { LayoutStyle, LayoutInsideStyle } from "../styles/LayoutStyled";
import Footer from "../components/footer/Footer";
import GetFollowerFeedListAPI from "../api/post/GetFollowerFeedListAPI";
import Empty from "../components/empty/Empty";
import LogoImg from "../assets/images/Logo.png";
import CommonModal from "../components/modal/CommonModal";
import { useNavigate } from "react-router-dom";
import timeFormat from "../utils/timeFormat";
import BasicHeader from "../components/header/BasicHeader";
import LikeHeart from "../components/common/LikeHeart";

export function HomeContents({ feedData, setFeedData, showModal }) {
  const navigate = useNavigate();
  const { getFeedListAPI } = GetFollowerFeedListAPI();
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFeedListAPI(); // 데이터 가져오기
        setFeedData(data); // 데이터를 상태에 저장
        setLoding(true);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchData(); // 데이터 가져오는 함수를 호출
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 호출
  console.log(feedData);

  function moveProfile(accountname) {
    navigate(`/profile/${accountname}`);
  }

  return (
    <>
      <FeedWrap>
        {loding && feedData.posts.length === 0 ? (
          <>
            <h1 className="a11y-hidden">팔로우가 존재하지 않습니다.</h1>
            <Empty image={LogoImg} alt={"404페이지"}>
              유저를 검색해 팔로우 해보세요!
            </Empty>
          </>
        ) : (
          loding && (
            <>
              {feedData.posts.map((item, index) => {
                return (
                  <div key={index} className="user-timeline">
                    <img
                      className="user-profileimg"
                      onClick={() => {
                        moveProfile(item.author.accountname);
                      }}
                      src={item.author.image}
                      alt="프로필이미지"
                    />
                    <div className="user-contents">
                      <div className="timeline-title-wrap">
                        <p className="timeline-title">{item.author.username}</p>
                        <img
                          className="img-dot"
                          src={IconDot}
                          alt="도트이미지"
                          onClick={showModal}
                        />
                      </div>
                      <p className="timeline-id">@ {item.author.accountname}</p>
                      <MoreButton
                        onClick={() => navigate(`/post/detail/${item.id}`)}
                      >
                        <img
                          className="timelin-img"
                          src={item.image}
                          alt="피드이미지"
                        />
                      </MoreButton>
                      <p className="timeline-main-text">{item.content}</p>
                      <div className="social-wrap">
                        <div>
                          {/* <img
                            onClick={colorChangeHandler}
                            className="social-icon"
                            src={iconColor}
                            alt="하트아이콘"
                          /> */}
                          <LikeHeart />
                        </div>
                        <div>
                          <img
                            className="social-icon"
                            onClick={() => navigate(`/post/detail/${item.id}`)}
                            src={IconMessage}
                            alt="댓글아이콘"
                          />
                          <p>{item.comments.length}</p>
                        </div>
                      </div>
                      <p className="wr-date">{timeFormat(item.updatedAt)}</p>
                    </div>
                  </div>
                );
              })}
            </>
          )
        )}
      </FeedWrap>
    </>
  );
}

export default function Home() {
  const [feedData, setFeedData] = useState(() => {}); // 상태를 사용하여 데이터를 저장합니다.
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  return (
    <LayoutStyle>
      <BasicHeader />
      <LayoutInsideStyle>
        <HomeContents
          feedData={feedData}
          setFeedData={setFeedData}
          showModal={showModal}
        />
      </LayoutInsideStyle>
      <Footer />
      {modalOpen && <CommonModal setModalOpen={setModalOpen}></CommonModal>}
    </LayoutStyle>
  );
}

export const FeedWrap = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  & .symbol-logo {
    margin-top: 220px;
  }

  & .home-text {
    font-size: 14px;
    color: #767676;
    margin: 20px 0;
  }

  & .user-timeline {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 15px;
    border-bottom: 1px solid var(--color-trans-grey);
  }

  .user-profileimg {
    border-radius: 42px;
    width: 42px;
    height: 42px;
    cursor: pointer;
  }

  .user-contents {
    width: 304px;
  }

  .timeline-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .img-dot {
    margin-top: 5px;
    cursor: pointer;
  }

  .timeline-title {
    font-size: 15px;
    font-weight: bold;
  }

  .timeline-id {
    color: #767676;
    font-size: 13px;
  }

  .timeline-main-text {
    font-size: 14px;
    line-height: normal;
    margin: 16px 0;
  }

  .timelin-img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
    object-fit: contain;
  }

  .social-wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--color-darkgrey);
    font-size: 12px;
    line-height: 12px;
    margin: 10px 0;

    .social-icon {
      cursor: pointer;
      width: 25px;
      height: 25px;
      object-fit: cover;
      margin-right: 6px;
    }
  }

  .social-wrap div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* .social-wrap div::after {
      margin-left: 6px;
      content: "55";
  } */

  .wr-date {
    color: #767676;
    font-size: 11px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 16px;
    margin-bottom: 5px;
  }
`;

const MoreButton = styled.div`
  cursor: pointer;
  border: none;
  margin-top: 15px;
`;

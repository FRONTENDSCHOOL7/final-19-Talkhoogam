import React, { useState, useEffect } from "react";
import styled from "styled-components";
import IconMessage from "../assets/icons/icon-message-circle.svg";
import ImgProfile from "../assets/images/img-profile.png";
import IconDot from "../assets/icons/s-icon-more-vertical.svg";
import ImgFeed from "../assets/icons/feed-img.jpeg";
import IconHeart from "../assets/icons/heart.svg";
import { LayoutStyle, LayoutInsideStyle } from "../styles/LayoutStyled";
import MainHeader from "../components/header/MainHeader";
import Footer from "../components/footer/Footer";
import { useRecoilValue } from "recoil";
import accountname from "../recoil/accountname";
import GetFollowerFeedListAPI from "../api/post/GetFollowerFeedListAPI";
import Empty from '../components/empty/Empty';
import LogoImg from "../assets/images/Logo.png"

function ShowFeed() {

  // const newAccountname = useRecoilValue(accountname);
  return (
    <div className="user-timeline">
      <img className="user-profileimg" src={ImgProfile} alt="프로필이미지" />
      <div className="user-contents">
        <div className="timeline-title-wrap">
          <p className="timeline-title"></p>
          <img className="img-dot" src={IconDot} alt="도트이미지" />
        </div>
        <p className="timeline-id">@ weniv_Mandarin</p>
        <p className="timeline-main-text">
          옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.
        </p>
        <img className="timelin-img" src={ImgFeed} alt="피드이미지" />
        <div className="social-wrap">
          <div>
            <img className="social-icon" src={IconHeart} alt="하트아이콘" />
          </div>
          <div>
            <img className="social-icon" src={IconMessage} alt="메세지아이콘" />
          </div>
        </div>
        <p className="wr-date">2020년 10월 21일</p>
      </div>
    </div>
  );
}

export function HomeContents() {

  const [feedData, setFeedData] = useState(() => {}); // 상태를 사용하여 데이터를 저장합니다.
  const {getFeedListAPI} = GetFollowerFeedListAPI();
  // console.log("피드 데이터 수 " , getFeed)
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFeedListAPI(); // 데이터 가져오기
        setFeedData(data); // 데이터를 상태에 저장
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    }

    fetchData(); // 데이터 가져오는 함수를 호출
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 호출
  console.log(feedData)
  return (
    <>
      <FeedWrap>
        {feedData ? (
          <>
            <p>팔로우 존재합니다.</p>
            {/* {feedData.map((item, index) => (
              <div key={index}>
                <p>글 작성자: {item.author.username}</p>
                <p>내용: {item.content}</p>
                <p>작성일: {item.createdAt}</p>
                
              </div>
            )} */}
            {}
          </>
        ) : (
          <>
            <h1 className='a11y-hidden'>팔로우가 존재하지 않습니다.</h1>
            <Empty image={LogoImg} alt={"404페이지"} >
              유저를 검색해 팔로우 해보세요!
            </Empty>
          </>
        )}
      </FeedWrap>
    </>
  );
}

export default function Home() {

  return (
    <LayoutStyle>
      <MainHeader />
      <LayoutInsideStyle>
      
      <HomeContents />

      </LayoutInsideStyle>
      <Footer />
    </LayoutStyle>
  );
}

export const FeedWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & .symbol-logo {
    margin-top: 220px;
  }

  & .home-text {
    font-size: 14px;
    color: #767676;
    margin: 20px 0;
  }

  /* & button {
    background: #f26e22;
    border-radius: 44px;
    padding: 13px 33px;
    margin-bottom: 294px;
  } */

  & .user-timeline {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .user-profileimg {
    border-radius: 42px;
    width: 42px;
    height: 42px;
  }

  .user-contents {
    width: 304px;
  }

  .timeline-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .timeline-title {
    font-size: 14px;
  }

  .timeline-id {
    color: #767676;
    font-size: 12px;
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
  }

  .social-wrap {
    display: flex;
    align-items: center;

    font-size: 12px;
    color: #767676;
    gap: 16px;
    margin-top: 12px;
  }

  .social-wrap img {
    width: 22px;
    height: 22px;
  }
  .social-wrap div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .social-wrap div::after {
    margin-left: 6px;
    content: "55";
  }

  .wr-date {
    color: #767676;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 16px;
  }
`;

// const HomeWrap = styled.section`
//   max-width: 390px;
//   border: 1px solid #dbdbdb;
//   margin: auto auto;
  
// `;
// const Header = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid #dbdbdb;
//   .feedname {
//     display: inline-block;
//     font-size: 18px;
//     margin: 13px 0 13px 16px;
//   }

//   & img {
//     margin-right: 16px;
//     cursor: pointer;
//   }
// `;



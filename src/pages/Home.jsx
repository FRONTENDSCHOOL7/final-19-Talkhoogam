import React, { useState } from "react";
import styled from "styled-components";
import IconSearch from "../assets/icons/icon-search.svg";
import SymbolLogo from "../assets/icons/symbol-logo.svg";
import IconHome from "../assets/icons/icon-home.svg";
import IconMessage from "../assets/icons/icon-message-circle.svg";
import IconEdit from "../assets/icons/icon-edit.svg";
import IconUser from "../assets/icons/icon-user.svg";
import ImgProfile from "../assets/images/img-profile.png";
import IconDot from "../assets/icons/s-icon-more-vertical.svg";
import ImgFeed from "../assets/icons/feed-img.jpeg";
import IconHeart from "../assets/icons/heart.svg";

function PlzFollow() {
  return (
    <>
      <img className="symbol-logo" src={SymbolLogo} alt="심볼로고" />
      <p className="home-text">유저를 검색해 팔로우 해보세요!</p>
      <button>검색하기</button>
    </>
  );
}

function ShowFeed() {
  return (
    <div className="user-timeline">
      <img className="user-profileimg" src={ImgProfile} alt="프로필이미지" />
      <div className="user-contents">
        <div className="timeline-title-wrap">
          <p className="timeline-title">애월읍 위니브 감귤농장</p>
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

function HomeContents({ showHome }) {
  return (
    <>
      <FeedWrap>
        {showHome ? <PlzFollow></PlzFollow> : <ShowFeed></ShowFeed>}
      </FeedWrap>
    </>
  );
}

export default function Home() {
  const [showHome, setShowHome] = useState(false);

  const changeHome = () => {
    if (!showHome) {
      console.log("아니야!");
      setShowHome(true);
    } else {
      console.log("맞아!");
      setShowHome(false);
    }
  };

  return (
    <HomeWrap>
      <Header>
        <p className="feedname">감귤마켓 피드</p>
        <button onClick={changeHome}>
          <img src={IconSearch} alt="피드" />
        </button>
      </Header>

      <HomeContents showHome={showHome} />
      <HomeContents showHome={showHome} />
      <HomeContents showHome={showHome} />

      <FooterTap>
        <FooterIconWrap>
          <img src={IconHome} alt="홈아이콘" />
          <p>홈</p>
        </FooterIconWrap>
        <FooterIconWrap>
          <img src={IconHome} alt="홈아이콘" />
          <p>거래</p>
        </FooterIconWrap>
        <FooterIconWrap>
          <img src={IconMessage} alt="메세지아이콘" />
          <p>게시물 작성</p>
        </FooterIconWrap>
        <FooterIconWrap>
          <img src={IconEdit} alt="게시물작성아이콘" />
          <p>번개모임</p>
        </FooterIconWrap>
        <FooterIconWrap>
          <img src={IconUser} alt="프로필아이콘" />
          <p>프로필</p>
        </FooterIconWrap>
      </FooterTap>
    </HomeWrap>
  );
}

const HomeWrap = styled.section`
  max-width: 390px;
  border: 1px solid #dbdbdb;
  margin: auto auto;
  .feedname {
    display: inline-block;
    font-size: 18px;
    margin: 13px 0 13px 16px;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;

  & img {
    margin-right: 16px;
    cursor: pointer;
  }
`;

const FeedWrap = styled.div`
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

  & button {
    background: #f26e22;
    border-radius: 44px;
    padding: 13px 33px;
    margin-bottom: 294px;
  }

  & .user-timeline {
    margin: 20px 0;
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

const FooterTap = styled.div`
  border-top: 1px solid #dbdbdb;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const FooterIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;
  width: 84px;
  height: 60px;

  & p {
    margin-top: 4px;
    text-align: center;
    font-size: 14px;
    color: #767676;
  }
`;

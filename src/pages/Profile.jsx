import React from "react";
import styled from "styled-components";
import ImgProfile from  "../assets/images/img-profile.png";
import ImgBack from "../assets/icons/icon-arrow-left.svg";
import ImgSet from "../assets/icons/icon_settings.svg";
import ImgShare from "../assets/icons/icon-share.svg";
import ImgMessage from "../assets/icons/icon-message-circle.svg";
import ImgLayes from "../assets/icons/icon-img-layers.svg";
import ImgExample from "../assets/images/슈독.jfif";
import ImgFeedListOff from "../assets/icons/icon-post-list-off.svg";
import ImgFeedLIstOn from "../assets/icons/icon-post-list-on.svg";
import ImgFeedGridOff from "../assets/icons/icon-post-album-off.svg";   
import ImgFeedGridOn from "../assets/icons/icon-post-album-on.svg";
import ImgVertical from "../assets/icons/s-icon-more-vertical.svg";
import FeedImg from "../assets/images/너굴맨.jfif";
import IconHeart from "../assets/icons/heart.svg";
import IconMessage from "../assets/icons/icon-message-circle.svg";

export default function Profile() {
    return (
        <>
        <ProfilePage> 
            <ProfileNav>
                <button className="back-btn">
                    <img src={ImgBack} alt="뒤로가기"></img>
                </button>
                <button className="set-btn">    
                    <img src={ImgSet} alt="설정"></img>
                </button>
            </ProfileNav>
            <ProfileMain>
                <ProfileHead> 
                    <div className="followerText">
                        <button className="followersNum">333</button>
                        <p className="profilehead-text">followers</p>
                    </div>
                    <img className="profileImg" src={ImgProfile} alt="프로필이미지"/>
                    <div className="followingText">
                        <button className="followingsNum">333</button>
                        <p className="profilehead-text">followings</p>
                    </div>
                </ProfileHead>
                <ProfileMid>
                    <p className="userName">이름</p>
                    <p className="id">@ 아이디</p>
                    <p className="profileIntro">소개</p>
                </ProfileMid>
                <Follow>
                    <img src={ImgMessage} alt="메세지구현X"></img>
                    <button className="follow_btn">팔로우</button>
                    <img src={ImgShare} alt="공유구현X"></img>
                </Follow>
            </ProfileMain>
        </ProfilePage>
        <Feed>
            <LayerNav> {/* 격자 형식이 기본 리스트 형식은 선택 */}
                <img src={ImgFeedListOff} alt="피드 리스트 정렬 Off" className="feedlist"></img>
                <img src={ImgFeedGridOn} alt="피드 그리드 정렬 On" className="feedgreed"></img>
                {/* 클릭 이벤트로 제어
                    <img src={ImgFeedListOn} alt="피드 리스트 정렬 On" className="feedlist"></img>
                    <img src={ImgFeedGridOff} alt="피드 그리드 정렬 Off" className="feedgreed"></img>
                */}
            </LayerNav> 
            <Layer>
                <div className="feedlayer">
                    <div className="content">  {/*피드가 추가될때마다 content div 추가*/}
                        <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                        <img src={ImgLayes} alt="이미지 2장 이상일 경우 나타나는 아이콘" className="bookMultiple"></img>
                    </div>
                    <div className="content">
                        <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                        <img src={ImgLayes} alt="이미지 2장 이상일 경우 나타나는 아이콘" className="bookMultiple"></img>
                    </div>
                    <div className="content">
                        <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                        <img src={ImgLayes} alt="이미지 2장 이상일 경우 나타나는 아이콘" className="bookMultiple"></img>
                    </div>
                    <div className="content">
                        <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                        <img src={ImgLayes} alt="이미지 2장 이상일 경우 나타나는 아이콘" className="bookMultiple"></img>
                    </div>
                </div>
            </Layer>
        </Feed>
        <List>
            <img className="list-profileimg" src={ImgProfile} alt="프로필이미지"/>
            <div className="feedlist">
                <img className="list-vertical" src={ImgVertical} alt="vertical 탭"/>
                <p className="list-name">이름</p>
                <p>@아이디</p>
                <p className="list-text">옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
          이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게
          뛰노는 인생의 힘있다.</p>
                <img className="list-img" src={FeedImg} alt="피드 사진"/>
                <div className="list-icon">
                    <img src={IconHeart} alt="좋아요"/>
                    <p>333</p>
                    <img src={IconMessage} alt="댓글"/>
                    <p>333</p>
                </div>
                <div className="list-date">
                    <p>2020년 10월 21일</p>
                </div>
            </div>
        </List>
        </>
    )
}


const ProfileNav = styled.div`
    
`;
const ProfilePage = styled.article`
    max-width : 390px;
    height: 40vh;   
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const ProfileMain = styled.div`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 390px;
    padding-bottom: 34px;
`;

const ProfileHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #767676;
    
    .profilehead-text{
        font-size: 12px;
        color: #767676;
    }
    .userName {
        font-weight: bold;
    }
    .profileImg {
        height: 110px;
        width: 110px;
        border-radius: 110px;
        margin: 0 31px 0 40px;
    }
    button {
        margin-bottom: 6px;
        font-size: 18px;
        font-weight: bold;
        color: black;
    }
`;

const ProfileMid = styled.div`
    text-align: center;
    margin: 16px auto;
    color: #767676;
    font-size: 12px;
    .userName {
        font-weight: bold;
        color: black;
        font-size: 16px
    }
    .id {
        margin: 8px auto;
    }
    .profileIntro {
        font-size: 14px;
        margin: 16px auto;
    }
`;

const Follow = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;
    /* 팔로우 버튼
    .follow_btn { 
        background-color: #F26E22;
        color: white;
        border: 1px Solid #F26E22;
        border-radius: 30px;
        padding: 8px 40px;
        margin: auto 10px;
        font-weight: 500;
    */
    .follow-btn {  //언팔로우 버튼
        background-color: none;
        border-radius: 30px;
        padding: 8px 40px;
        margin: auto 10px;
        font-weight: 500;
    }
    img {
        border: 1px solid #DBDBDB;
        border-radius: 30px;
        padding: 7px;
    }
`;


const Feed = styled.div`  //정렬 기능 수정
    max-width: 390px;
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const LayerNav = styled.div`
    margin-top: 6px;
    border: 0.5px solid #DBDBDB; 
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    .feedlist {
        margin: 9px;
    }
    .feedgreed {
        margin: 9px;
    }
`;

const Layer = styled.div`
    display: grid; // 재웅 그리드로 바꾸고 도망갑니다
    margin: 16px;
    .content {
        position: relative;
    }
    .feedlayer  .bookImg { //책표지 api 사이즈 따라서 수정
        width: 90px;
        height: 160px;  
    }
    .feedlayer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }
    .feedlayer  .bookMultiple {
        position: absolute;
        top: 0;
        right: 0;
    }
`;

const List = styled.div`
    max-width: 390px;
    margin: 4px auto;
    display: flex;
    align-items: start;
    justify-content: center;
    font-size: 14px;
    .list-profileimg {
        width: 42px;
        height: 42px;   
        border: 0.5px solid #DBDBDB;
        border-radius: 30px;
    }
    .feedlist {
        margin-top: 4px;
        margin-left: 12px;
    }

    .list-text {
        margin: 16px auto;
    }
    .list-name {
        font-weight: 500;
    }
    .list-img {
        border-radius: 10px;
    }
    .list-icon {
        display:flex;
        margin: 12px auto;
    }
    .list-icon img{
        width: 20px;
        height: 20px;
    }
    .list-icon p {
        margin: 4px 6px;
    }
    .list-date {
        display: block;
        color:#767676;
    }
    .list-vertical {
        float: right;
        margin-left: 50%;
        margin-bottom: 10%;
    }
`;
import React from "react";
import styled from "styled-components";
import ImgProfile from  "../assets/images/img-profile.png";
import ImgBack from "../assets/icons/icon-arrow-left.svg";
import ImgSet from "../assets/icons/icon_settings.svg";
import ImgShare from "../assets/icons/icon-share.svg";
import ImgMessage from "../assets/icons/icon-message-circle.svg";
import ImgLayes from "../assets/icons/icon-img-layers.svg";
import ImgExample from "../assets/images/example/슈독.jfif";

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
            <img src={ImgLayes} alt="이미지 2장 이상일 경우 나타나는 아이콘"></img>
            <LayerNav>

            </LayerNav>
            <Layer>
                <div className="feedlayer">
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                    <img src={ImgExample} alt="예시 사진"></img>
                </div>
            </Layer>
        </Feed>
        </>
    )
}

const ProfileNav = styled.div``;
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
        border: 1px solid #DBDBDB;
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
    .follow_btn {
        background-color: #F26E22;
        color: white;
        border: 1px Solid #F26E22;
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
    
`;

const Layer = styled.div`
    display: grid; // 재웅 그리드로 바꾸고 도망갑니다
    img { //책표지 api 사이즈 따라서 수정
        width: 90px;
        height: 160px;  
        border-radius: 10px;
    }
    .feedlayer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }
`;

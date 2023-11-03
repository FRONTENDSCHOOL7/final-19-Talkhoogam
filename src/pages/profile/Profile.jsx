import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import styled from "styled-components";
import ImgProfile from "../../assets/images/img-profile.png";
import ImgShare from "../../assets/icons/icon-share.svg";
import ImgMessage from "../../assets/icons/icon-message-circle.svg";
import ImgFeedListOff from "../../assets/icons/icon-post-list-off.svg";
import ImgFeedListOn from "../../assets/icons/icon-post-list-on.svg";
import ImgFeedGridOff from "../../assets/icons/icon-post-album-off.svg";
import ImgFeedGridOn from "../../assets/icons/icon-post-album-on.svg";
import ProfileInfoAPI from "../../api/profile/ProfileInfoAPI";
import BasicHeader from "../../components/header/BasicHeader";
import { LayoutStyle } from "../../styles/LayoutStyled.js";
import Footer from "../../components/footer/Footer";
import GetFollowerFeedListAPI from "../../api/post/GetFollowerFeedListAPI";
import ListFeed from "../profile/ListFeed.jsx";
import GreedFeed from "../profile/GreedFeed";
import MyProduct from "../../components/profile/MyProduct.jsx";
import AccountNameProfileAPI from "../../api/post/AcountNameProfileAPI";
import accountname from "../../recoil/accountname";
import { useParams } from 'react-router-dom';
import { useRecoilValue } from "recoil";

//Modal.setAppElemnet("#root");
export default function Profile() {
  //const token = useRecoilValue(loginToken)
  //프로필 이미지 모달
  const [isImgOpen, setIsImgOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const openImg = (imageSrc) => {
    setSelectedImg(imageSrc);
    setIsImgOpen(true);
  };
  const closeImg = () => {
    setSelectedImg(null);
    setIsImgOpen(false);
  };
  const onClickHandler = async () => {
    const info = await ProfileInfoAPI();
  };

  //내 프로필에서 팔로우/언팔로우 버튼
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  //다른 사람의 프로필에서 프로필 설정, 상품 등록
  const onClickSetProfile = () => {
    navigate("../editprofile");
  };
  const onClickProductAdd = () => {
    navigate("../productadd");
  };

  //유저 정보 불러오기
  {/*const [profileInfo, setProfileInfo] = useState(() => {});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const info = await ProfileInfoAPI();
        setProfileInfo(info);
      } catch (error) {
        console.error("API 호출 중 오류 발생", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);*/}

  const { getFeedListAPI } = GetFollowerFeedListAPI();
  //피드 스타일 선택
  const [gridStyle, setGridStyle] = useState(false); //켜짐
  const [listStyle, setListstyle] = useState(true); //꺼짐
  //리스트 형식 피드 받아오기
  const [feedData, setFeedData] = useState([]); // 상태를 사용하여 데이터를 저장합니다.

  // toggleGridStyle 을 눌렀을 때 그리드 스타일을 불러오는 핸들러
  const toggleGridStyle = () => {
    setListstyle(true);
    setGridStyle(false);
  };

  // onListHandler 을 눌렀을 때 리스트 스타일을 불러오는 핸들러
  const onListHandler = () => {
    setListstyle(false);
    setGridStyle(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getFeedListAPI(); // 데이터 가져오기
        setFeedData(data); // 데이터를 상태에 저장
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    }
    fetchData();
  }, []);

  //유저 프로필 불러오기
  const params = useParams();
  const {getAccountNameProfile} = AccountNameProfileAPI(params.accountname);
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData(){
        try {
            const data = await getAccountNameProfile();
            setUserInfo(data.profile);
        } catch (error){
            console.error("데이터 가져오기 오류:", error);
        } finally {
            setLoading(false)
        }
    }
    fetchData();
  }, [params.accountname]);
  console.log(userInfo)
  
  //팔로워 목록
  const navigate = useNavigate();
  //const [isFollowers, setIsFollowers] = useState("");
  const onClickFollower = () => {
    navigate(`../profile/${params.accountname}/Followers`);
  };
  const onClickFollowing = () => {
    navigate(`../profile/${params.accountname}/Followings`);
  };

  //내 프로필
  const myAccount = useRecoilValue(accountname);

  return (
    <>
      <LayoutStyle>
        <BasicHeader></BasicHeader>
        <ProfilePage>
          <ProfileMain>
            <ProfileHead>
              <div className="followerText" onClick={onClickFollower}>
                {loading ? (
                  <button className="followersNum">Loading...</button>
                ) : (
                  <button className="followersNum">
                    {userInfo?.followerCount}
                  </button>
                )}
                <p className="profilehead-text">followers</p>
              </div>
              <div>
                <img
                  className="profileImg"
                  src={userInfo?.image}
                  alt="프로필이미지"
                  onClick={() => openImg({ ImgProfile })}
                />
                <ChangeModal
                  isOpen={isImgOpen}
                  onRequestClose={closeImg}
                  contentLabel="프로필 이미지"
                >
                  {selectedImg && (
                    <img
                      src={userInfo?.image}
                      alt="프로필 이미지"
                      className="profileImg-modal"
                    ></img>
                  )}
                  <button className="close" onClick={closeImg}>
                    &times;
                  </button>
                </ChangeModal>
              </div>
              <div className="followingText" onClick={onClickFollowing}>
                {loading ? (
                  <button className="followingsNum">Loading...</button>
                ) : (
                  <button className="followingsNum">
                    {userInfo?.followingCount}
                  </button>
                )}
                <p className="profilehead-text">followings</p>
              </div>
            </ProfileHead>
            <ProfileMid>
              {loading ? (
                <p className="userName">Loading...</p>
              ) : (
                <p className="userName">{userInfo.username}</p>
              )}
              {loading ? (
                <p className="id">Loading...</p>
              ) : (
                <p className="id">@ {userInfo.accountname}</p>
              )}
              {loading ? (
                <p className="profileIntro">Loading...</p>
              ) : (
                <p className="profileIntro">{userInfo.intro}</p>
              )}
            </ProfileMid>
            <Follow>
              {myAccount === params.accountname ? (
              <>
                <button onClick={onClickSetProfile}>프로필 수정</button>
                <button onClick={onClickProductAdd}>상품 등록</button>
              </>) : (
              <>
                {/* 받아온 accountname 에 따라 각각 나타내기 */}
                <img src={ImgMessage} alt="메세지구현X"></img>
                <div onClick={handleClick}>
                {isFollowing ? (
                  <button className="unfollow-btn">언팔로우</button>
                ) : (
                  <button className="follow-btn">팔로우</button>
                )}
              </div>
              <img src={ImgShare} alt="공유구현X"></img>
            </>) }
            </Follow>
          </ProfileMain>
        </ProfilePage>
        <MyProduct></MyProduct>
        <Feed>
          <LayerNav>
            {/* 격자 형식이 기본 리스트 형식은 선택 -- 그리드를 누르면 */}
            <img
              onClick={onListHandler}
              src={listStyle ? ImgFeedListOff : ImgFeedListOn}
              alt="피드 리스트 정렬 Off"
              className="feedlist"
            ></img>
            <img
              onClick={toggleGridStyle}
              src={gridStyle ? ImgFeedGridOff : ImgFeedGridOn}
              alt="피드 그리드 정렬 On"
              className="feedgrid"
            ></img>
          </LayerNav>
        </Feed>
        {listStyle ? <GreedFeed accountname = {params.accountname}></GreedFeed> : <ListFeed accountname = {params.accountname}></ListFeed>}
        <Footer></Footer>
      </LayoutStyle>
    </>
  );
}

const ChangeModal = styled(Modal)`
  width: 300px;
  height: 300px;
  margin: 8% auto;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border: none;
  }
  button {
    //버튼 사이즈 조절 다시하기
    position: absolute;
    font-size: 30px;
  }
`;

const ProfilePage = styled.article`
  background-color: white;
  max-width: 390px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const ProfileMain = styled.div`
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

  .profilehead-text {
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
  .followerText:hover {
    cursor: pointer;
  }
  .followingText:hover {
    cursor: pointer;
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
    font-size: 16px;
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
  .follow-btn,
  .unfollow-btn {
    width: 140px;
    border-radius: 30px;
    padding: 8px 40px;
    font-weight: 500;
    margin: auto 5px;
  }
  .follow-btn {
    border: 1px Solid var(--color-mainColor);
    background-color: var(--color-mainColor);
    color: white;
  }
  .unfollow-btn {
    //언팔로우 버튼
    border: 1px Solid #dbdbdb;
    color: #767676;
  }
  .follow-btn:hover,
  .unfollow-btn:hover {
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
  }
  img {
    border: 1px solid #dbdbdb;
    border-radius: 30px;
    padding: 7px;
    margin: auto 5px;
  }
  img:hover {
    cursor: pointer;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
  }
  button{ 
        border-radius: 30px;
        padding: 8px 26px;
        font-weight: 500;
        margin: auto 5px;
        border: 1px Solid #DBDBDB;
        color:#767676;  
    }
    button:hover{
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
    }
`;

const Feed = styled.div`
  //정렬 기능 수정
  background-color: white;
  max-width: 390px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LayerNav = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  .feedlist {
    margin: 9px;
  }
  .feedgrid {
    margin: 9px;
  }
  img:hover {
    cursor: pointer;
  }
`;

const Layer = styled.div`
  display: grid; // 재웅 그리드로 바꾸고 도망갑니다
  margin: 16px;
  .content {
    position: relative;
  }
  .feedlayer .bookImg {
    //책표지 api 사이즈 따라서 수정
    width: 108px;
    height: 160px;
  }
  .feedlayer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .feedlayer .bookMultiple {
    position: absolute;
    top: 0;
    right: 0;
  }
  .bookImg:hover {
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const List = styled.div`
  background-color: white;
  max-width: 390px;
  margin: 4px auto;
  display: flex;
  align-items: start;
  justify-content: center;
  font-size: 14px;
  padding: 30px 16px;
  .list-profileimg {
    width: 42px;
    height: 42px;
    border: 0.5px solid #dbdbdb;
    border-radius: 30px;
  }
  .feedlist {
    margin-top: 4px;
    margin-left: 12px;
  }
  .list-name {
    font-weight: 500;
  }
  .list-id {
    color: #767676;
    margin-top: 4px;
  }
  .list-img {
    width: 90px;
    height: 160px;
    border-radius: 10px;
    margin: 10px auto;
  }
  .list-icon {
    display: flex;
    margin: 12px auto;
  }
  .list-icon img {
    width: 20px;
    height: 20px;
  }
  .list-icon p {
    margin: 4px 6px;
  }
  .list-date {
    display: block;
    color: #767676;
  }
  .list-vertical {
    float: right;
    margin-left: 50%;
    margin-bottom: 10%;
  }
`;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import styled from "styled-components";
import ImgVertical from "../../assets/icons/s-icon-more-vertical.svg";
import IconHeart from "../../assets/icons/heart.svg";
import IconHeartActive from "../../assets/icons/heart-avtive.svg";
import IconMessage from "../../assets/icons/icon-message-circle.svg";
import MyFeedListAPI from "../../api/post/MyFeedListAPI.jsx";
import accountName from "../../recoil/accountname";
import Empty from '../../components/empty/Empty';
import LogoImg from "../../assets/images/Logo.png"
import CommonModal from '../../components/modal/CommonModal';
import { useRecoilValue } from "recoil";
import timeFormat from "../../utils/timeFormat.js";

export default function ListFeed(accountname) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { getMyFeedListAPI } = MyFeedListAPI(accountname);
  const [myFeedData, setMyFeedData] = useState(() => {});
  const [modalOpen, setModalOpen ] = useState(false);
  const [isMine, setIsMine] = useState(false);
  const loginName = useRecoilValue(accountName);
  const [postId, setPostId] = useState("");

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
  }, []);
  //console.log("myFeedData : ", myFeedData);
//더보기 버튼
  const showModal = (name, id) => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
    setPostId(id);
    if(name === loginName){
      setIsMine(true)  
    } else {
      setIsMine(false)
    }
}

//하트 색칠하기
const [iconColor, setIconColor] = useState(IconHeart);

const colorChangeHandler = () => {
    if(iconColor === IconHeart){
        setIconColor(IconHeartActive);
    }else{
        setIconColor(IconHeart);
    }
}

  return (
    <UlStyled>
      {myFeedData ? (
        myFeedData.post.map((item, index) => (
          <List key={item.id}>
            <img
              className="list-profileimg"
              src={item.author.image}
              alt="프로필이미지"
            />
            <div className="feedlist">
              <div>
                <img
                    onClick={() => {showModal(item.author.accountname, item.id)}}
                  className="list-vertical"
                  src={ImgVertical}
                  alt="vertical 탭"
                />
                <p className="list-name">{item.author.username}</p>
                <p className="list-id">{item.author.accountname}</p>
              </div>
              <MoreButton onClick={() => navigate(`/post/detail/${item.id}`)}>
                <img
                    className="list-img"
                    src={item.image}
                    alt="피드 사진"
                />
              </MoreButton>
              <p className="list-text">{item.content}</p>
              <div className="list-icon">
                <img onClick={colorChangeHandler} src={iconColor} alt="좋아요"/>
                <p>{item.heartCount}</p>
                <img src={IconMessage} alt="댓글" />
                <p>{item.commentCount}</p>
              </div>
              <div className="list-date">
                <p>{timeFormat(item.updatedAt)}</p>
              </div>
            </div>
          </List>
        ))
      ) : (
        <>
        <h1 className='a11y-hidden'>팔로우가 존재하지 않습니다.</h1>
        <Empty image={LogoImg} alt={"404페이지"} >
          유저를 검색해 팔로우 해보세요!
        </Empty>
      </>
      )}
        { modalOpen && 
        <CommonModal 
        isMine={isMine}  
        id={postId}
        setModalOpen={setModalOpen}
        isLocation={`post`}
        ></CommonModal>
      }
    </UlStyled>
  );
}
const MoreButton = styled.div`
    cursor: pointer;
    border: none;
`
const List = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background-color: white;
  max-width: 390px;
  margin: 4px auto;
  font-size: 14px;
  padding: 16px 21px;
  .list-profileimg {
    width: 42px;
    height: 42px;
    border: 0.5px solid #dbdbdb;
    border-radius: 30px;
  }
  .feedlist {
    line-height: 1.1;
    margin-top: 4px;
    margin-left: 12px;
    flex-grow: 1;
  }
  .list-name {
    font-size: 15px;
    font-weight: 500;
    max-width: 300px;
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
  .list-icon img:hover {
      cursor: pointer;
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
  }
  .list-vertical:hover {
    cursor: pointer;
  }
`;
const UlStyled = styled.ul`
  margin-bottom: 50px;
`;

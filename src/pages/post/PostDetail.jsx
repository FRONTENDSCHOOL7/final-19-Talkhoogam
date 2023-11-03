import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components';
import PostDetailAPI from '../../api/post/PostDetailAPI';
import {LayoutStyle, LayoutInsideStyle} from "../../styles/LayoutStyled";
import BasicHeader from '../../components/header/BasicHeader';
import IconDot from "../../assets/icons/s-icon-more-vertical.svg";
import IconMessage from "../../assets/icons/icon-message-circle.svg";
import CommonModal from '../../components/modal/CommonModal';
import accountname from '../../recoil/accountname';
import { useRecoilValue } from 'recoil';
import Comment from '../../components/comment/Comment';
import CommentInput from '../../components/comment/CommentInput';
import timeFormat from '../../utils/timeFormat';
import LikeHeart from '../../components/common/LikeHeart';

export default function PostDetail() {
  
  
  const params = useParams();
  const navigate = useNavigate();
  const getPostDetail = PostDetailAPI(params.id);
  const loginAccountName = useRecoilValue(accountname);
  const [postDetail, setPostDetail] = useState(() => {});
  const [modalOpen, setModalOpen ] = useState(false);
  const [isMine, setIsMine] = useState(false);
  const [createName, setCreateName] = useState("");
  const [idState, setIdState] = useState("");
  const [isLocation, setIsLocation] = useState("");

  useEffect(() => {
    const detailList = async () => {
      const list = await getPostDetail();
      setPostDetail(list.post);
    };
    detailList();
  }, []);

  // console.log(postDetail);

  const showModalInComment = (id, name, location) => {
    showModal(id, name, location);
  };

  const showModal = (id, name, location) => {
      modalOpen ? setModalOpen(false) : setModalOpen(true)
      if(name === loginAccountName){
        setIsMine(true);
        setIdState(id);
        setIsLocation(location);
      }else{
        setIsMine(false);
        setIdState(id);
        setIsLocation(location);
      }
  }
  // 콜백 함수 1: setCreateName 업데이트
  const handleCreateName = (value) => {
    setCreateName(value);
  };

  // 콜백 함수 2: setIdState 업데이트
  const handleIdState = (value) => {
    setIdState(value);
  };

  // 콜백 함수 3: setIsLocation 업데이트
  const handleIsLocation = (value) => {
    setIsLocation(value);
  };

  function onClickProfile(id){
      navigate(`/profile/${id}`);
  }

  return (
    <LayoutStyle>
      <h1 className='a11y-hidden'>피드 상세보기 페이지</h1>
      <BasicHeader></BasicHeader>
      <LayoutInsideStyle>
        <PostDetailWrap>
          {postDetail ? (
            <div className="user-timeline">
                <img className="user-profileimg" onClick={() => {onClickProfile(postDetail.author.accountname)}} src={postDetail.author.image} alt="프로필이미지" />
                <div className="user-contents">
                  <div className="timeline-title-wrap">
                    <p className="timeline-title">{postDetail.author.username}</p>
                    <img className="img-dot" src={IconDot} alt="도트이미지" onClick={() => {
                      showModal(params.id, postDetail.author.accountname, "post")
                    }}/>
                  </div>
                  <p className="timeline-id">@ {postDetail.author.accountname}</p>
                    <img className="timelin-img" src={postDetail.image} alt="피드이미지" />
                  <p className="timeline-main-text">{postDetail.content}</p>
                  <div className="social-wrap">
                    <div>
                        <LikeHeart />
                    </div>
                    <div>
                        <img className="social-icon" src={IconMessage} alt="댓글아이콘" />
                        <p>{postDetail.commentCount}</p>
                    </div>
                  </div>
                  <p className="wr-date">{timeFormat(postDetail.updatedAt)}</p>
                </div>
              </div>
            )
            : (
              <p>Loading..</p>
          )}
        </PostDetailWrap>
        
        <Comment 
          postId={params.id} 
          createName={handleCreateName}
          idState={handleIdState}
          isLocation={handleIsLocation}
          showModalInComment={showModalInComment} // 넘겨줄 콜백 함수 추가
        ></Comment>

      </LayoutInsideStyle>
      { modalOpen && 
        <CommonModal 
        isMine={isMine}
        id={idState}
        setModalOpen={setModalOpen}
        isLocation={isLocation}
        postId={postDetail.id}
        ></CommonModal>
      }
      <CommentInput id={params.id}></CommentInput>
    </LayoutStyle>
  )
}

export const PostDetailWrap = styled.div`
    
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

  & .user-timeline {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 15px;
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

  .img-dot{
    cursor: pointer;
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
    object-fit: cover;
    margin-top: 16px;
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

  .wr-date {
    color: #767676;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 16px;
  }


  .social-wrap{
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--color-darkgrey);
      font-size: 12px;
      line-height: 12px;
      margin: 10px 0;
      .social-icon{
          cursor: pointer;
          width: 20px;
          height: 20px;
          object-fit: cover;
          margin-right: 6px;
      }
  }

  .social-wrap div {
      display: flex;
      align-items: center;
      justify-content: center;
  }

`;

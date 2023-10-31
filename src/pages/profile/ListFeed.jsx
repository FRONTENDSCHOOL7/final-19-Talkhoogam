import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import styled from "styled-components";
import ImgProfile from "../../assets/images/img-profile.png";
import ImgExample from "../../assets/images/슈독.jfif";
import ImgVertical from "../../assets/icons/s-icon-more-vertical.svg";
import IconHeart from "../../assets/icons/heart.svg";
import IconMessage from "../../assets/icons/icon-message-circle.svg";

export default function ListFeed() {
  return (
    <UlStyled>
      <List>
        <img className="list-profileimg" src={ImgProfile} alt="프로필이미지" />
        <div className="feedlist">
          <div>
            <img
              className="list-vertical"
              src={ImgVertical}
              alt="vertical 탭"
            />
            <p className="list-name">이름이름이르밍르밍름</p>
            <p className="list-id">@아이디</p>
          </div>
          <img className="list-img" src={ImgExample} alt="피드 사진" />
          <p className="list-text">
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          <div className="list-icon">
            <img src={IconHeart} alt="좋아요" />
            <p>333</p>
            <img src={IconMessage} alt="댓글" />
            <p>333</p>
          </div>
          <div className="list-date">
            <p>2020년 10월 21일</p>
          </div>
        </div>
      </List>
      <List>
        <img className="list-profileimg" src={ImgProfile} alt="프로필이미지" />
        <div className="feedlist">
          <div>
            <img
              className="list-vertical"
              src={ImgVertical}
              alt="vertical 탭"
            />
            <p className="list-name">이름이름이르밍르밍름</p>
            <p className="list-id">@아이디</p>
          </div>
          <img className="list-img" src={ImgExample} alt="피드 사진" />
          <p className="list-text">
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          <div className="list-icon">
            <img src={IconHeart} alt="좋아요" />
            <p>333</p>
            <img src={IconMessage} alt="댓글" />
            <p>333</p>
          </div>
          <div className="list-date">
            <p>2020년 10월 21일</p>
          </div>
        </div>
      </List>
    </UlStyled>
  );
}
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
    margin-top: 4px;
    margin-left: 12px;
  }

  .list-name {
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

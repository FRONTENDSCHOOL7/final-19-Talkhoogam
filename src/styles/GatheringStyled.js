import styled from "styled-components";
import arrowWhite from "../assets/icons/icon-arrow-white.svg";
import arrowRight from "../assets/icons/icon-arrow-right.svg";

// Form
export const GroupSection = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
`;
// Section in Form
export const GroupArticle = styled.article`
  border-bottom: 1px solid #dbdbdb;
  text-align: center;

  & h3 {
    color: var(--color-mainColor);
    font-size: 17px;
    margin-bottom: 10px;
  }
`;

// API List Ul
export const GatheringUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  overflow: auto;
`;
// API List Li
export const GatheringItemsStyle = styled.li`
  width: 100px;
  padding: 10px;

  & .post-thumbnail {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
  }
  & .post-tit {
    font-weight: bold;
    color: var(--color-mainColor);
  }

  & .post-info {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;

// Gathering List Styles
export const GroupArticleProto = styled.article`
  max-width: 100%;
  border-bottom: 1px solid #dedede;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  & h3 {
    display: inline-block;
    color: black;
    font-size: 17px;
    font-weight: bold;
  }

  & a {
    font-size: 13px;
  }

  & a:hover,
  & a:active {
    color: var(--color-mainColor);
  }

  & .group-tit-more {
    width: 100%;
    padding: 0 5px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const GroupUlProto = styled.ul`
  width: 100%;

  display: flex;
  gap: 15px;
  overflow-x: auto;
  position: relative;

  /* 가로 스크롤바 수정 */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GroupLiProto = styled.li`
  max-width: 130px;
  flex-shrink: 0;

  & .post-thumbnail {
    width: 100%;
    aspect-ratio: 3/4;
    border-radius: 5px;
  }

  & .post-tit {
    font-size: 15px;
    text-align: left;
    color: #343434;
    font-weight: bold;
    margin: 5px auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  & .post-info {
    font-size: 13px;
    text-align: left;
    color: #767676;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    position: relative;
  }
`;

export const BtnScrollHandler = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  opacity: 0.3;
  background-color: #000;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.left {
    background-image: url(${arrowWhite});
    left: -18px;
  }

  &.right {
    background-image: url(${arrowRight});
    right: -18px;
  }
`;

export const ContainerProto = styled.div`
  position: relative;
  width: 100%;
`;

export const MoreIcon = styled.img`
  width: 18px;
  height: 18px;
`;

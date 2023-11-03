import styled from 'styled-components';
import Button from '../components/common/button/Button';

export const MyProductWrap = styled.article`
  box-sizing: border-box;
  width: 100%;
  max-width: 390px;
  margin: 6px auto;
  padding: 20px 12px 10px;
  position: relative;

  & .sub-title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    img {
      cursor: pointer;
      width: 18px;
      height: 18px;
    }
  }

  & .sub-title {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    /* margin-bottom: 16px; */
  }

  & .error-list {
    display: block;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
  }

  & .product-ul-wrap {
    position: relative;
  }
`;

export const ScrollHandler = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 5px;

  background-color: black;
  opacity: 0.3;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &.left {
    left: 0px;
  }

  &.right {
    right: 0px;
  }
`;

export const MyProductUl = styled.ul`
  max-width: 390px;
  height: 140px;

  display: flex;
  gap: 10px;

  overflow-x: auto;
  /* 가로 스크롤바 수정 */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MyProductLi = styled.li`
  max-width: 140px;
  flex-shrink: 0;

  & button {
    font-family: inherit;
    text-align: left;
    border-radius: 8px;

    &:hover {
      box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
    }
  }

  & .img-my-product {
    width: 100%;
    aspect-ratio: 140/90;
    border-radius: 8px;
    margin: 6px auto 4px 0;
  }

  & .product-tit {
    font-size: 15px;
    margin-bottom: 3px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  & .product-price {
    font-size: 12px;
    color: var(--color-mainColor);
  }
`;

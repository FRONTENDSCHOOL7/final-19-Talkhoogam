import styled from 'styled-components';

export const MyProductWrap = styled.article`
  box-sizing: border-box;
  width: 100%;
  min-height: 200;
  margin: 6px auto;
  padding: 20px 12px 10px;

  & .sub-title {
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  & .error-list {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
`;

export const MyProductUl = styled.ul`
  width: 100%;
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
    font-size: 14px;
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

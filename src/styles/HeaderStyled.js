import styled from 'styled-components';
import iconArrow from '../assets/icons/icon-arrow-left.svg';
import iconMore from '../assets/icons/s-icon-more-vertical.svg';
import Btn from '../components/common/button/Button';

export const HeaderMain = styled.header`
  max-width: 100%;
  min-height: 24px;
  padding: 10px 15px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 16px;
    font-weight: bold;
  }

  & .searchInput {
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    flex-grow: 1;
  }
`;

export const BackBtn = styled.button`
  width: 22px;
  height: 22px;

  background-image: url(${iconArrow});
`;

export const MenuBtn = styled.button`
  width: 22px;
  height: 22px;

  background-image: url(${iconMore});
  background-repeat: no-repeat;
`;

export const UploadBtn = styled(Btn)`
  width: 92px;
  padding: 7px 31px;
  font-size: 14px;
`;

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderMoreList = styled.article`
  width: 80%;
  height: auto;
  background-color: white;
  position: absolute;
  border-radius: 10px;
  overflow: hidden;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
  padding: 20px;

  & li {
    background-color: white;
    min-height: 24px;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: bold;

    & button {
      font: inherit;
    }
  }

  & li:hover,
  & li:active {
    color: var(--color-mainColor);
  }

  & .btn-Close-list {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0px;
    right: 15px;
  }
`;

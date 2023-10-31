import styled from 'styled-components';

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
`;

export const MenuBtn = styled.button`
  width: 22px;
  height: 22px;
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
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HeaderMoreList = styled.article`
  width: 252px;
  height: auto;
  background-color: white;
  position: absolute;
  border: 1px solid #dbdbdb;
  border-radius: 10px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
  padding: 20px;

  & li {
    background-color: white;
    min-height: 24px;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;

    & button {
      font: inherit;
      color: inherit;
      padding: 0;
    }
  }

  & li:first-child {
    margin-top: 20px;
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

export const ModalLogoutStyled = styled.article`
  width: 270px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;

  & .question {
    margin: 22px 50px;
    font-weight: bold;
  }

  & .btn-group {
    width: 100%;
    border-top: 1px solid #dbdbdb;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    & button {
      width: 50%;
      height: 46px;
      font: inherit;
    }

    & button:hover {
      color: var(--color-mainColor);
      font-weight: bold;
    }

    & button:first-child {
      border-right: 1px solid #dbdbdb;
    }
  }
`;

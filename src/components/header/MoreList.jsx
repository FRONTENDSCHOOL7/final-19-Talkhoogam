import React from 'react';
import { Backdrop, HeaderMoreList } from '../../styles/HeaderStyled';
import { Link } from 'react-router-dom';
import iconX from '../../assets/icons/x.svg';

export default function MoreList({ setMoreOpen }) {
  function closeMore() {
    setMoreOpen(false);
  }

  return (
    <>
      <Backdrop onClick={closeMore}></Backdrop>
      <HeaderMoreList>
        <ul>
          <li>
            <button>설정</button>
          </li>
          <li>
            <Link to="../profile">개인정보 수정</Link>
          </li>
        </ul>
        <button className="btn-Close-list" onClick={closeMore}>
          <img src={iconX} alt="모달 닫기" />
        </button>
      </HeaderMoreList>
    </>
  );
}

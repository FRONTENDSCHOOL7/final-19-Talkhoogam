import React, { useEffect } from 'react';
import { Backdrop, HeaderMoreList } from '../../styles/HeaderStyled';
import { Link } from 'react-router-dom';
import iconX from '../../assets/icons/x.svg';

export default function MoreList({ setMoreOpen }) {
  useEffect(() => {
    scrollLock();
    return () => scrollUnlock();
  }, []);

  // 스크롤 잠금
  const scrollLock = () => {
    document.body.style.overflow = 'hidden';
  };

  // 스크롤 잠금 해제
  const scrollUnlock = () => {
    document.body.style.overflow = 'auto';
  };

  function closeMore() {
    setMoreOpen(false);
  }

  return (
    <>
      <Backdrop onClick={closeMore} />
      <HeaderMoreList>
        <MenuList />
        <button className="btn-Close-list" onClick={closeMore}>
          <img src={iconX} alt="모달 닫기" />
        </button>
      </HeaderMoreList>
    </>
  );
}

function MenuList() {
  return (
    <>
      <ul>
        <li>
          <Link to="../setprofile">설정 및 개인정보</Link>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </>
  );
}

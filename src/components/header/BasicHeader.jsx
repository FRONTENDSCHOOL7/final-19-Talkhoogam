import React from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader';

export default function BasicHeader() {
  const location = useLocation();
  const pathName = location.pathname;

  //page 이름 가져오기
  function getPageName(pathName) {
    console.log(pathName);

    switch (pathName) {
      case '/home':
        return '톡후감';
      case '/gathering':
        return '모임페이지';
      case '/profile':
        return '프로필';
      // 게시글 작성페이지
      case '/edit':
        return '게시글 작성하기';
      // 거래 페이지
      case '/sellbook':
        return '거래하기';
      default:
        return '';
    }
  }
  const pageName = getPageName(pathName);

  return (
    <>
      <MainHeader pageName={pageName} />
    </>
  );
}

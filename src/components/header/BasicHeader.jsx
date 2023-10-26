import React from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader';

export default function BasicHeader() {
  const location = useLocation();
  const pathName = location.pathname;

  //page 이름 가져오기
  function getPageName(pathName) {
    switch (pathName) {
      case '/home':
        return '톡후감';
      case '/gathering':
        return '독서모임';
      case '/profile':
        return '프로필';
      // 상품등록 페이지
      case '/productadd':
        return '상품 등록하기';
      // 피드등록 페이지
      case '/feedadd':
        return '피드 등록하기';
      // 거래 페이지
      case '/sellbook':
        return '거래';
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

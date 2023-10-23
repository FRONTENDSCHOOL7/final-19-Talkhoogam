import React, { useState } from 'react';
import { BackBtn, HeaderMain, MenuBtn } from '../../styles/HeaderStyled';
import MoreList from './MoreList';

export default function MainHeader({ pageName }) {
  const [moreOpen, setMoreOpen] = useState(false);

  // 뒤로가기
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  // 모달 띄우기
  function openMore() {
    moreOpen ? setMoreOpen(false) : setMoreOpen(true);
  }

  return (
    <HeaderMain>
      <BackBtn className="btn-goBack" onClick={goBack} />
      {pageName && <h2>{pageName}</h2>}
      <MenuBtn className="btn-openMore" onClick={openMore} />
      {moreOpen && <MoreList setMoreOpen={setMoreOpen} />}
    </HeaderMain>
  );
}

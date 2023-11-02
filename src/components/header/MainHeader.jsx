import React, { useState } from "react";
import { BackBtn, HeaderMain, MenuBtn } from "../../styles/HeaderStyled";
import MoreList from "./MoreList";
import iconArrow from "../../assets/icons/icon-arrow-left.svg";
import iconMore from "../../assets/icons/s-icon-more-vertical.svg";

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
    <>
      <HeaderMain>
        <BackBtn className="btn-goBack" onClick={goBack}>
          <img src={iconArrow} alt="뒤로가기 버튼" />
        </BackBtn>
        {pageName && <h2>{pageName}</h2>}
        <MenuBtn className="btn-openMore" onClick={openMore}>
          <img src={iconMore} alt="메뉴 더보기" />
        </MenuBtn>
      </HeaderMain>
      {moreOpen && <MoreList setMoreOpen={setMoreOpen} />}
    </>
  );
}

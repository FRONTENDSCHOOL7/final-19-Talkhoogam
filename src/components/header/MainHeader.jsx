import React, { useState } from "react";
import {
  BackBtn,
  HeaderMain,
  LogoImg,
  MenuBtn,
  SearchBtn,
} from "../../styles/HeaderStyled";
import MoreList from "./MoreList";
import iconArrow from "../../assets/icons/icon-arrow-left.svg";
import iconMore from "../../assets/icons/s-icon-more-vertical.svg";
import iconSearch from "../../assets/icons/icon-search.svg";
import logoImg from "../../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainHeader({ pageName }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
        {location.pathname === "/home" ||
        location.pathname === "/gathering" ||
        location.pathname === "/chat" ? (
          <div style={{ width: "24px" }} />
        ) : (
          <BackBtn className="btn-goBack" onClick={goBack}>
            <img src={iconArrow} alt="뒤로가기 버튼" />
          </BackBtn>
        )}
        {pageName && <h2>{pageName}</h2>}
        {location.pathname === "/home" ? (
          <LogoImg src={logoImg} alt="로고" />
        ) : null}
        {location.pathname === "/home" ? (
          <SearchBtn
            onClick={() => {
              navigate(`/search`);
            }}
          >
            <img src={iconSearch} alt="검색 아이콘" />
          </SearchBtn>
        ) : (
          <MenuBtn className="btn-openMore" onClick={openMore}>
            <img src={iconMore} alt="메뉴 더보기" />
          </MenuBtn>
        )}
      </HeaderMain>
      {moreOpen && <MoreList setMoreOpen={setMoreOpen} />}
    </>
  );
}

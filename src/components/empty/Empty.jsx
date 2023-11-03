import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  EmptyLayout,
  LogoImg,
  EmptyText,
  SearchBtn,
} from "../../styles/EmptyStyled";

function Empty({ image, alt, children, navigatePath, isMine }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;

  //page 이름 가져오기
  function getPageName(pathName) {
    // console.log(pathName);

    switch (pathName) {
      case "/home":
        return "검색하기";
      case "/sellbook":
        return "판매등록";
      default:
        return "이전 페이지";
    }
  }

  const pageName = getPageName(pathName);

  const onClickHandler = () => {
    console.log("페이지 경로 : ", location);
    if (location.pathname === "/home") {
      navigate("/search");
    } else if (location.pathname === "/sellbook") {
      navigate("/productadd");
    } else {
      navigate(navigatePath);
    }
  };
  return (
    <>
      <EmptyLayout>
        <LogoImg src={image} alt={alt} />
        <EmptyText>{children}</EmptyText>
        {isMine && <SearchBtn onClick={onClickHandler}>{pageName}</SearchBtn>}
      </EmptyLayout>
    </>
  );
}

export default Empty;

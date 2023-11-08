import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MainHeader from "./MainHeader";

export default function BasicHeader() {
  const location = useLocation();
  const pathName = location.pathname;
  const params = useParams();
  const userName = params.name;
  const userAccount = params.accountname;
  // console.log(`userName : ${userName}, userAccount : ${userAccount}`);

  //page 이름 가져오기
  function getPageName(pathName) {
    switch (pathName) {
      // 홈페이지
      case "/home":
        return;
      // 독서 모임 페이지
      case "/gathering":
        return "독서 모임";
      // 프로필 페이지
      case `/profile/${userAccount}`:
        return "프로필";
      // 팔로잉 페이지
      case `/profile/${userAccount}/followings`:
      case `/profile/${userAccount}/Followings`:
        return "팔로잉";
      // 팔로워 페이지
      case `/profile/${userAccount}/followers`:
      case `/profile/${userAccount}/Followers`:
        return `팔로워`;
      // 상품등록 페이지
      case "/productadd":
        return "상품 등록하기";
      // 피드등록 페이지
      // 피드등록 페이지
      case "/postupload":
        return "피드 등록하기";
      // 거래 페이지
      case "/sellbook":
        return "거래";
      // 채팅창
      case "/chat":
        return "채팅";
      case `/chat/${userName}`:
        return `${userName} | 채팅`;
      default:
        return "";
    }
  }
  const pageName = getPageName(pathName);

  return (
    <>
      <MainHeader pageName={pageName} />
    </>
  );
}

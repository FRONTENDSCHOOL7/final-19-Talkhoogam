import React, { useEffect, useState } from "react";
import {
  Backdrop,
  HeaderMoreList,
  ModalLogoutStyled,
} from "../../styles/HeaderStyled";
import { Link, useNavigate } from "react-router-dom";
import iconX from "../../assets/icons/x.svg";
import { useRecoilState } from "recoil";
import loginToken from "../../recoil/loginToken";
import loginCheck from "../../recoil/loginCheck";
import accountname from "../../recoil/accountname";

export default function MoreList({ setMoreOpen }) {
  // 로그인 확인
  const [isLogin, setIsLogin] = useRecoilState(loginCheck);
  // 로그인 토큰, accountName
  const [token, setToken] = useRecoilState(loginToken);
  const [accountName, setAccountName] = useRecoilState(accountname);
  // 로그아웃 modal
  const [showLogout, setShowLogout] = useState(false);
  // 페이지 이동
  const navigate = useNavigate();

  useEffect(() => {
    scrollLock();
    return () => scrollUnlock();
  }, []);

  // 스크롤 잠금
  const scrollLock = () => {
    document.body.style.overflow = "hidden";
  };

  // 스크롤 잠금 해제
  const scrollUnlock = () => {
    document.body.style.overflow = "auto";
  };

  // 모달 끄기
  function closeMore() {
    setMoreOpen(false);
  }

  function MoveEditProfile() {
    navigate("/editprofile");
  }

  // 로그아웃
  function funcLogout() {
    setIsLogin(false);
    setToken(null);
    setAccountName("");
    console.log("login : " + isLogin);
    console.log("token : " + token);
    console.log("accountName : " + accountName);
    navigate("/login");
    setShowLogout(false);
    setMoreOpen(false);
  }

  function MenuList() {
    return (
      <>
        <ul>
          {isLogin ? <li onClick={MoveEditProfile}>개인 정보 수정</li> : ""}
          <li>
            <BtnLogout>로그아웃</BtnLogout>
          </li>
        </ul>
      </>
    );
  }

  function BtnLogout() {
    // 로그인 / 로그아웃
    function logout() {
      if (isLogin) {
        setShowLogout(true);
      } else {
        console.log("login : " + isLogin);
        navigate("/login");
      }
    }

    return (
      <>
        <button onClick={logout}>{isLogin ? "로그아웃" : "로그인"}</button>
      </>
    );
  }

  return (
    <>
      <Backdrop onClick={closeMore} />
      {showLogout ? (
        <ModalLogoutStyled>
          <h2 className="a11y-hidden">로그아웃</h2>
          <strong className="question">로그아웃 하시겠습니까?</strong>
          <div className="btn-group">
            <button
              onClick={() => {
                setShowLogout(false);
              }}
            >
              취소
            </button>
            <button onClick={funcLogout}>로그아웃</button>
          </div>
        </ModalLogoutStyled>
      ) : (
        <HeaderMoreList>
          <h2 className="a11y-hidden">개인정보 수정 및 로그아웃</h2>
          <MenuList />
          <button className="btn-Close-list" onClick={closeMore}>
            <img src={iconX} alt="모달 닫기" />
          </button>
        </HeaderMoreList>
      )}
    </>
  );
}

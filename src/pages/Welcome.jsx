import React, { useEffect, useState } from "react";
import logoImg from "../assets/images/Logo.png";
import { Logo, LogoText, WelcomePage } from "../styles/WelcomeStyled";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import loginCheck from "../recoil/loginCheck";

export default function Welcome() {
  const isLogin = useRecoilValue(loginCheck);
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      isLogin ? navigate("/home") : navigate("/login");
    }, 1200);

    return () => clearTimeout(time);
  }, []);

  return (
    <WelcomePage>
      <h1 className="a11y-hidden">웰컴 페이지</h1>
      <Logo src={logoImg} />
      <LogoText>
        독서 기록하고 떠들자!&nbsp;
        <strong>톡후감</strong>
      </LogoText>
    </WelcomePage>
  );
}

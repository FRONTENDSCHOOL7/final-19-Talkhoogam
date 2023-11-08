import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import loginCheck from "../recoil/loginCheck";
import logoImg from "../assets/images/Logo.png";
import styled, { keyframes } from "styled-components";
import logoText from "../assets/images/text-logo.png";

export default function Welcome() {
  const isLogin = useRecoilValue(loginCheck);
  const navigate = useNavigate();

  useEffect(() => {
    const time = setTimeout(() => {
      isLogin ? navigate("/home") : navigate("/login");
    }, 2000);

    return () => clearTimeout(time);
  }, []);

  return (
    <WelcomePage>
      <h1 className="a11y-hidden">웰컴 페이지</h1>
      <LogoImg src={logoImg} />
      <WelcomeText>
        <Letter delat="0.05s">
          <strong>독</strong>
        </Letter>
        <Letter delay="0.1s">
          <strong>서</strong>
        </Letter>
        <Letter delay="0.15s">하</Letter>
        <Letter delay="0.2s">고</Letter>

        <Letter delay="0.25s" style={{ marginLeft: "5px" }}>
          <strong>기</strong>
        </Letter>
        <Letter delay="0.3s">
          <strong>록</strong>
        </Letter>
        <Letter delay="0.35s">하</Letter>
        <Letter delay="0.4s">자</Letter>
        <Letter delay="0.8s">
          <LogoText src={logoText} />
        </Letter>
      </WelcomeText>
    </WelcomePage>
  );
}

const WelcomePage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  max-width: 225px;
`;

const LogoImg = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  margin: 0 auto;
`;

const LogoText = styled.img`
  width: 80px;
  position: relative;
  margin-left: 5px;
  top: 3px;
`;

const WelcomeText = styled.h1`
  display: flex;
  align-items: end;
  float: left;
  min-width: 10px;
  min-height: 10px;
  margin-top: 10px;
  position: relative;
  font-size: 18px;

  color: var(--color-mainColor);

  strong {
    font-weight: bold;
  }
`;

const WelcomeEffect = keyframes`
  to {
    transform: translateY(0);
  }
`;

const Letter = styled.span`
  display: inline-block;
  transform: translateY(-20px);
  animation: ${WelcomeEffect} 0.4s ease-out forwards;
  animation-delay: ${(props) => props.delay || "0s"};
`;

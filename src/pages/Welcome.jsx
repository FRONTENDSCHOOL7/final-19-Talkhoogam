import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import loginCheck from "../recoil/loginCheck";
import LogoImg from "../components/common/Logo";
import styled from "styled-components";

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
      <LogoImg />
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
`;

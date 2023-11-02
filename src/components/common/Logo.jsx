import React from "react";
import logoImg from "../../assets/images/Logo.png";
import styled from "styled-components";
import textLogo from "../../assets/images/text-logo.png";

export default function Logo() {
  return (
    <LogoWrap>
      <LogoImg src={logoImg} alt="톡후감 로고" />
      <LogoText src={textLogo} />
    </LogoWrap>
  );
}
const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  display: block;
  width: 120px;
  height: 120px;

  margin: 0 auto;
`;

const LogoText = styled.img`
  width: 100px;
  margin: 20px;
  padding-left: 10px;
  /* 
  font-size: 20px;
  text-align: center;
  font-weight: lighter;
  letter-spacing: 0.4rem;
  color: var(--color-mainColor); */
`;

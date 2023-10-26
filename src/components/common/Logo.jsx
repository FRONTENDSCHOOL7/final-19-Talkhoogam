import React from "react";
import logoImg from "../../assets/images/Logo.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <div>
      <LogoImg src={logoImg} alt="톡후감 로고" />
      <LogoText>TALKHOOGAM</LogoText>
    </div>
  );
}

const LogoImg = styled.img`
  display: block;
  width: auto;
  height: 150px;

  margin: 0 auto;
`;

const LogoText = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;

  font-size: 20px;
  text-align: center;
  font-weight: lighter;
  letter-spacing: 0.5rem;
  color: var(--color-mainColor);
`;

import React, { useState } from "react";
import {
  JoinForm,
  JoinInput,
  JoinPage,
  JoinText,
  JoinTitle,
  NextBtn,
} from "../styles/JoinStyled";
import Button from "../components/common/button/Button";

export default function Join() {
  const [email, setEmail] = useState("");

  return (
    <JoinPage>
      <JoinTitle>회원가입</JoinTitle>
      <JoinForm>
        <label htmlFor="email">이메일</label>
        <JoinInput type="email" />

        <label htmlFor="password">비밀번호</label>
        <JoinInput type="password" />

        <label htmlFor="password">비밀번호 확인</label>
        <JoinInput type="password" />

        <NextBtn>다음</NextBtn>
      </JoinForm>
    </JoinPage>
  );
}

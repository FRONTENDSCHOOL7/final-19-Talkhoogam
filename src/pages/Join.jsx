import React from "react";
import { InputBox } from "./login/LoginStyled.js";
import { JoinPage, JoinText, JoinTitle } from "./JoinStyled";

export default function Join() {
  return (
    <JoinPage>
      <JoinTitle>회원가입</JoinTitle>
      <InputBox type="text" />
      <JoinText>이메일</JoinText>
      <p>비밀번호</p>
      <p>비밀번호 확인</p>
      <p>닉네임</p>
    </JoinPage>
  );
}

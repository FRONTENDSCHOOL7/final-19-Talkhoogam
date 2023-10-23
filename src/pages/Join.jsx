import React, { useState } from "react";
import {
  ErrorText,
  InforText,
  JoinForm,
  JoinInput,
  JoinLabel,
  JoinPage,
  JoinTitle,
  NextBtn,
} from "../styles/JoinStyled";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    pwCheck: "",
  });

  const EmailValue = (e) => {
    setEmail(e.target.value);
  };

  const PasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const PwCheckValue = (e) => {
    setPwCheck(e.target.value);
  };

  const JoinValid = (e) => {
    e.preventDefault();
    const errorText = { email: "", password: "" };
    if (!email) {
      errorText.email = "필수 입력 사항입니다.";
    } else if (!password) {
      errorText.password = "필수 입력 사항입니다.";
    } else if (password !== pwCheck) {
      errorText.pwCheck = "비밀번호가 일치하지 않습니다.";
    } else {
      setError({});
    }

    setError(errorText);
  };

  return (
    <JoinPage>
      <JoinTitle>회원가입</JoinTitle>
      <JoinForm>
        <JoinLabel htmlFor="email">이메일</JoinLabel>
        <JoinInput type="email" placeholder="이메일" onChange={EmailValue} />
        <ErrorText>{error.email}</ErrorText>

        <JoinLabel htmlFor="password">비밀번호</JoinLabel>
        <InforText>6자 이상 14자 이상의 비밀번호를 입력해 주세요.</InforText>
        <JoinInput
          type="password"
          placeholder="비밀번호"
          minLength="6"
          maxLength="14"
          onChange={PasswordValue}
        />
        <ErrorText>{error.password}</ErrorText>

        <JoinLabel htmlFor="password">비밀번호 확인</JoinLabel>
        <JoinInput
          type="password"
          placeholder="비밀번호 확인"
          minLength="6"
          maxLength="14"
          onChange={PwCheckValue}
        />
        <ErrorText>{error.pwCheck}</ErrorText>

        <NextBtn onClick={JoinValid}>다음</NextBtn>
      </JoinForm>
    </JoinPage>
  );
}

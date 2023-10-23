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
import JoinApi from "../api/JoinApi";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwErr, setPwErr] = useState("");
  const [pwCheckErr, setPwCheckErr] = useState("");
  const [btnState, SetBtnState] = useState(true);

  const EmailValue = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const PasswordValue = (e) => {
    setPassword(e.target.value);
    setPwErr("");
  };

  const PwCheckValue = (e) => {
    setPwCheck(e.target.value);
    setPwCheckErr("");
  };

  const passwordReg = /^(?=.*[a-z])(?=.*\d).{6,}$/;

  const EmailValid = (e) => {
    if (!email) {
      setEmailErr("필수 입력 사항입니다.");
    } else if (!email.includes("@")) {
      setEmailErr("이메일 형식이 올바르지 않습니다.");
    } else {
      setEmailErr("");
    }
  };

  const PasswordValid = (e) => {
    if (!password) {
      setPwErr("필수 입력 사항입니다.");
    } else if (!passwordReg.test(password)) {
      setPwErr("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPwErr("");
    }
  };

  const PwCheckValid = (e) => {
    if (!pwCheck) {
      setPwCheckErr("필수 입력 사항입니다.");
    } else if (password !== pwCheck) {
      setPwCheckErr("비밀번호가 일치하지 않습니다.");
    } else {
      setPwCheck("");
      SetBtnState(false);
    }
  };

  const handleValid = (e) => {
    const isValid = !emailErr && !pwErr && !pwCheckErr;
    SetBtnState(isValid);
  };

  return (
    <JoinPage>
      <JoinTitle>회원가입</JoinTitle>
      <JoinForm>
        <JoinLabel htmlFor="email">이메일</JoinLabel>
        <JoinInput
          type="email"
          placeholder="이메일"
          onChange={EmailValue}
          onBlur={EmailValid}
        />
        <ErrorText>{emailErr}</ErrorText>

        <JoinLabel htmlFor="password">비밀번호</JoinLabel>
        <InforText>
          영어 소문자, 숫자를 포함한 6자 이상의 비밀번호를 입력해 주세요.
        </InforText>
        <JoinInput
          type="password"
          placeholder="비밀번호"
          minLength="6"
          maxLength="20"
          onChange={PasswordValue}
          onBlur={PasswordValid}
        />
        <ErrorText>{pwErr}</ErrorText>

        <JoinLabel htmlFor="password">비밀번호 확인</JoinLabel>
        <JoinInput
          type="password"
          placeholder="비밀번호 확인"
          minLength="6"
          maxLength="20"
          onChange={PwCheckValue}
          onBlur={PwCheckValid}
        />
        <ErrorText>{pwCheckErr}</ErrorText>

        <NextBtn onClick={handleValid} disabled={btnState}>
          다음
        </NextBtn>
      </JoinForm>
    </JoinPage>
  );
}

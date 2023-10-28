import React, { useEffect, useState } from "react";
import {
  ErrorText,
  InforText,
  JoinForm,
  JoinInput,
  JoinLabel,
  NextBtn,
  PageArticle,
  Title,
} from "../styles/JoinStyled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { emailState, pwState } from "../recoil/joinData";
import EmailValidApi from "../api/EmailValidApi";

export default function Join() {
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(pwState);
  const [pwCheck, setPwCheck] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pwErr, setPwErr] = useState("");
  const [pwCheckErr, setPwCheckErr] = useState("");
  const [btnState, SetBtnState] = useState(true);
  const navigate = useNavigate();

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

  const EmailValid = async (e) => {
    if (!email) {
      setEmailErr("필수 입력 항목입니다.");
    } else if (!email.includes("@")) {
      setEmailErr("이메일 형식이 올바르지 않습니다.");
    } else {
      const emailValidRes = await EmailValidApi(email);
      setEmailErr(emailValidRes);
    }
    handleValid();
  };

  const passwordReg = /^(?=.*[a-z])(?=.*\d).{6,}$/;

  const PasswordValid = (e) => {
    if (!password) {
      setPwErr("필수 입력 항목입니다.");
    } else if (!passwordReg.test(password)) {
      setPwErr("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPwErr("");
    }
    handleValid();
  };

  const PwCheckValid = (e) => {
    if (!pwCheck) {
      setPwCheckErr("필수 입력 항목입니다.");
    } else if (password !== pwCheck) {
      setPwCheckErr("비밀번호가 일치하지 않습니다.");
    } else {
      setPwCheckErr("");
    }
    handleValid();
  };

  const handleValid = () => {
    if (!emailErr && !pwErr && !pwCheckErr && email && password && pwCheck) {
      SetBtnState(false);
    } else {
      SetBtnState(true);
    }
  };

  useEffect(() => {
    handleValid();
  }, [email, password, pwCheck]);

  const MoveSetProfile = () => {
    navigate("/setProfile");
  };

  return (
    <PageArticle>
      <Title>회원가입</Title>
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

        <NextBtn onClick={MoveSetProfile} disabled={btnState}>
          다음
        </NextBtn>
      </JoinForm>
    </PageArticle>
  );
}

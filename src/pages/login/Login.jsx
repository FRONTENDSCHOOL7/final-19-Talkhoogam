import React, { useState } from "react";
import * as S from "./LoginStyled.js";
import Logo from "../../components/common/Logo";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const EmailValue = (e) => {
    setEmail(e.target.value);
  };

  const PasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const LoginError = (e) => {
    if (!email && !password) {
      e.preventDefault();
      setError("이메일과 비밀번호를 입력해 주세요.");
    } else if (!email) {
      e.preventDefault();
      setError("이메일을 입력해 주세요.");
    } else if (!password) {
      e.preventDefault();
      setError("비밀번호를 입력해 주세요.");
    } else {
      setError("");
    }
  };

  return (
    <S.LoginPage>
      <Logo />
      <S.EmailLoginForm>
        <S.InputBox type="email" placeholder="이메일" onChange={EmailValue} />
        <S.InputBox
          type="password"
          placeholder="비밀번호"
          minLength="8"
          maxLength="16"
          onChange={PasswordValue}
        />
        <S.ErrorText>{error}</S.ErrorText>
        <S.LoginBtn onClick={LoginError}>로그인</S.LoginBtn>
      </S.EmailLoginForm>
      <S.SnsLoginText>SNS 로그인</S.SnsLoginText>

      <S.SnsLogin>
        <S.SnsLoginBtn className="btn-kakao"></S.SnsLoginBtn>
        <S.SnsLoginBtn className="btn-facebook"></S.SnsLoginBtn>
        <S.SnsLoginBtn className="btn-google"></S.SnsLoginBtn>
      </S.SnsLogin>
      <Link to="/join">회원가입</Link>
    </S.LoginPage>
  );
}

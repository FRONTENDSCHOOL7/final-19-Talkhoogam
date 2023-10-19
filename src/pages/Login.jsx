import React, { useState } from "react";
import {
  LoginPage,
  EmailLoginForm,
  InputBox,
  LoginBtn,
  SnsLogin,
  SnsLoginText,
  SnsLoginBtn,
  ErrorText,
} from "../styles/LoginStyled";
import Logo from "../components/common/Logo.jsx";
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
    <LoginPage>
      <Logo />
      <EmailLoginForm>
        <InputBox type="email" placeholder="이메일" onChange={EmailValue} />
        <InputBox
          type="password"
          placeholder="비밀번호"
          minLength="8"
          maxLength="16"
          onChange={PasswordValue}
        />
        <ErrorText>{error}</ErrorText>
        <LoginBtn onClick={LoginError}>로그인</LoginBtn>
      </EmailLoginForm>
      <SnsLoginText>SNS 로그인</SnsLoginText>

      <SnsLogin>
        <SnsLoginBtn className="btn-kakao"></SnsLoginBtn>
        <SnsLoginBtn className="btn-facebook"></SnsLoginBtn>
        <SnsLoginBtn className="btn-google"></SnsLoginBtn>
      </SnsLogin>
      <Link to="/join">회원가입</Link>
    </LoginPage>
  );
}

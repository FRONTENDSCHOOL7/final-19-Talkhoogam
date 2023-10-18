import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/images/Logo.png";
import iconKakao from "../assets/images/icon_kakao.png";
import iconFacebook from "../assets/images/icon_facebook.png";
import iconGoogle from "../assets/images/icon_google.png";

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
    if (!email && password) {
      e.preventDefault();
      setError("이메일을 입력해 주세요");
    } else if (!password && email) {
      e.preventDefault();
      setError("비밀번호를 입력해 주세요");
    } else if (!email && !password) {
      e.preventDefault();
      setError("이메일과 비밀번호를 입력해 주세요");
    } else setError("");
  };

  return (
    <WelcomePage>
      <LogoImg src={logoImg} alt="톡후감 로고" />
      <LogoText>TALKHOOGAM</LogoText>
      <EmailLoginForm>
        <LoginInput
          type="email"
          placeholder="이메일"
          onChange={EmailValue}
          value={email}
        />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          minLength="8"
          maxLength="16"
          onChange={PasswordValue}
          value={password}
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
      <SnsAndJoin>
        <a href="">회원가입</a>
      </SnsAndJoin>
    </WelcomePage>
  );
}

const WelcomePage = styled.article`
  background-color: white;
  height: 100vh;
  max-width: 300px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: auto;
  height: 150px;

  margin: 0 auto;
`;

const LogoText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #14b069;
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
`;

const EmailLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-bottom: 20px;
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 30px;
  border: 1px solid #aaaaaa;
  border-radius: 30px;
  margin-bottom: 5px;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  color: #414141;

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    outline: none;
    outline: 1px solid var(--color-mainColor);
  }
`;

const LoginBtn = styled.button`
  width: 100%;
  background-color: var(--color-mainColor);
  box-sizing: border-box;
  padding: 13px;
  margin-top: 10px;
  border-radius: 30px;

  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const SnsLoginText = styled.p`
  width: 100%;
  font-size: 14px;
  color: #767676;
  text-align: center;

  &::before {
    content: "";
    width: 100px;
    height: 1px;
    margin: 5px;
    display: inline-block;
    border-bottom: 1px solid #767676;
  }

  &::after {
    content: "";
    width: 100px;
    height: 1px;
    margin: 5px;
    display: inline-block;
    border-bottom: 1px solid #767676;
  }
`;

const SnsLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SnsLoginBtn = styled.button`
  background-color: white;
  width: 50px;
  height: 50px;
  margin: 5px;

  font-size: 14px;
  color: #767676;
  border-radius: 40px;

  &.btn-kakao {
    background-image: url(${iconKakao});
    background-size: cover;
  }

  &.btn-facebook {
    background-image: url(${iconFacebook});
    background-size: cover;
  }

  &.btn-google {
    background-image: url(${iconGoogle});
    background-size: cover;
  }
`;

const SnsAndJoin = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #767676;
`;

const ErrorText = styled.p`
  text-align: left;
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;

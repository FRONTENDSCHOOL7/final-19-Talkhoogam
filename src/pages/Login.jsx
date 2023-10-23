import React, { useState } from "react";
import { useRecoilState } from "recoil";
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
import { Link, useNavigate } from "react-router-dom";
import LoginApi from "../api/LoginApi";
import loginCheck from "../recoil/loginCheck";
import loginToken from "../recoil/loginToken";
import accountname from "../recoil/accountname";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(loginToken);
  const [isLogin, setIsLogin] = useRecoilState(loginCheck);
  const [isAccountname, setIsAccountname] = useRecoilState(accountname);

  const EmailValue = (e) => {
    setEmail(e.target.value);
  };

  const PasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const LoginValid = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError("이메일과 비밀번호를 입력해 주세요.");
    } else if (!email) {
      setError("이메일을 입력해 주세요.");
    } else if (!password) {
      setError("비밀번호를 입력해 주세요.");
    } else {
      setError("");
      const loginRes = await LoginApi(email, password);

      if (loginRes.status !== 422) {
        console.log(loginRes);
        const newToken = loginRes.user.token;
        const newAccountname = loginRes.user.accountname;
        setToken(newToken);
        setIsLogin(true);
        setIsAccountname(newAccountname);

        localStorage.setItem("userToken", newToken);
        navigate("/home");
      } else {
        setError("이메일 또는 비밀번호가 일치하지 않습니다.");
      }
    }
  };

  return (
    <LoginPage>
      <h1 className="a11y-hidden">로그인 페이지</h1>
      <Logo />
      <EmailLoginForm>
        <InputBox type="email" placeholder="이메일" onChange={EmailValue} />
        <InputBox
          type="password"
          placeholder="비밀번호"
          minLength="6"
          maxLength="20"
          onChange={PasswordValue}
        />
        <ErrorText>{error}</ErrorText>
        <LoginBtn onClick={LoginValid}>로그인</LoginBtn>
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

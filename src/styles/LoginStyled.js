import styled from "styled-components";
import iconKakao from "../assets/images/icon_kakao.png";
import iconFacebook from "../assets/images/icon_facebook.png";
import iconGoogle from "../assets/images/icon_google.png";
import { Btn } from "../components/common/button/Button";

export const LoginPage = styled.article`
  @media screen and (max-width: 390px) {
    min-width: 390px;
  }

  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #767676;
`;

export const EmailLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 20px;
`;

export const InputWrap = styled.div`
  border-radius: 15px;
  background-color: var(--color-trans-grey);
`;

export const InputBox = styled.input`
  background-color: var(--color-trans-grey);
  box-sizing: border-box;
  width: 100%;
  padding: 10px 30px;
  border-radius: 15px;
  margin-bottom: 3px;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  color: #555555;

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    border-radius: 10px;
    outline: none;
    outline: 2px solid var(--color-mainColor);
  }
`;

export const SnsLoginText = styled.p`
  width: 100%;
  font-size: 14px;
  color: #767676;
  text-align: center;

  &::before {
    content: "";
    width: 7.5rem;
    height: 1px;
    margin: 5px 5px 5px 0;
    display: inline-block;
    border-bottom: 1px solid #767676;
  }

  &::after {
    content: "";
    width: 7.5rem;
    height: 1px;
    margin: 5px 0 5px 5px;
    display: inline-block;
    border-bottom: 1px solid #767676;
  }
`;

export const SnsLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const SnsLoginBtn = styled.button`
  background-color: white;
  width: 50px;
  height: 50px;
  margin: 5px 5px 15px 5px;

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

export const ErrorText = styled.p`
  margin-left: 15px;
  font-size: 14px;
  color: red;
  margin-top: 10px;
`;

export const LoginBtn = styled(Btn)`
  margin-top: 10px;
`;

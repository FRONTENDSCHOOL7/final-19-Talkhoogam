import styled from "styled-components";
import iconKakao from "../assets/images/icon_kakao.png";
import iconFacebook from "../assets/images/icon_facebook.png";
import iconGoogle from "../assets/images/icon_google.png";

export const LoginPage = styled.article`
  height: 100vh;
  max-width: 390px;
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

export const InputBox = styled.input`
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

export const LoginBtn = styled.button`
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
  margin-top: 5px;
`;

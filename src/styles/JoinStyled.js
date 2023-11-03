import styled from "styled-components";
import { Btn } from "../components/common/button/Button";

export const PageArticle = styled.article`
  height: 100vh;
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 23px;
  font-weight: bold;
  margin-top: 50px;
  color: var(--color-mainColor);
`;

export const JoinForm = styled.form`
  color: #767676;
  font-size: 13px;
  margin-top: 40px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #3d3d3d;
`;

export const InforText = styled.p`
  margin: 10px 0;
`;

export const UnderInput = styled.input`
  margin-top: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px;
  border-bottom: 2.5px solid #56b77869;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  color: var(--color-darkgrey);

  &::placeholder {
    font-size: 14px;
    color: #767676a3;
  }

  &:focus {
    outline: none;
    border-bottom: 2.5px solid var(--color-mainColor);
  }
`;

export const NextBtn = styled(Btn)`
  margin-top: 10px;

  &:enabled {
    transition: background-color 0.8s, color 0.5s;
    background-color: var(--color-mainColor);
    cursor: pointer;
  }

  &:disabled {
    background-color: #56b77869;
  }
`;

export const ErrorText = styled.p`
  margin: 5px 0 25px 0;
  font-size: 14px;
  color: red;
`;

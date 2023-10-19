import styled from "styled-components";
import { Btn } from "../components/common/button/Button";

export const JoinPage = styled.article`
  height: 100vh;
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const JoinTitle = styled.h1`
  font-size: 23px;
  font-weight: bold;
  margin-top: 50px;
  color: var(--color-mainColor);
`;

export const JoinForm = styled.form`
  color: #767676;
  font-size: 15px;
  margin-top: 40px;
`;

export const JoinInput = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px;
  border-bottom: 2.5px solid #56b77869;
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  color: #414141;

  &::placeholder {
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-bottom: 2.5px solid var(--color-mainColor);
  }
`;

export const NextBtn = styled(Btn)`
  margin-top: 10px;
  background-color: #56b77869;
`;

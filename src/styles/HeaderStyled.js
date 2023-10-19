import styled from "styled-components";
import iconArrow from "../assets/icons/icon-arrow-left.svg";
import iconMore from "../assets/icons/s-icon-more-vertical.svg";

export const HeaderMain = styled.header`
  max-width: 100%;
  min-height: 24px;
  padding: 10px 15px;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  & h2 {
    font-size: 16px;
    font-weight: bold;
  }

  & input {
    width: 100%;
    background-color: #f2f2f2;
    flex-grow: 1;
  }
`;

export const BackBtn = styled.button`
  width: 22px;
  height: 22px;

  background-image: url(${iconArrow});
`;

export const MenuBtn = styled.button`
  width: 22px;
  height: 22px;

  background-image: url(${iconMore});
`;

export const UploadBtn = styled.button`
  width: 80px;
  height: 24px;
  border-radius: 24px;
  background-color: var(--color-mainColor);
  color: white;
  font-size: 14px;
`;

import React from "react";
import styled from "styled-components";

export default function Button({ children, onClick, ...props }) {
  return (
    <div>
      <Btn onClick={onClick} {...props}>
        {children}
      </Btn>
    </div>
  );
}

export const Btn = styled.button`
  width: 100%;
  background-color: var(--color-mainColor);
  box-sizing: border-box;
  padding: 13px;
  border-radius: 30px;

  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: "Pretendard", sans-serif;

  &:active {
    background-color: #4b9f68;
  }
`;

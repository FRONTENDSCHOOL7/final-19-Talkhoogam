import React from "react";
import styled from "styled-components";

export default function Button({ children, ...props }) {
  return (
    <div>
      <Btn {...props}>{children}</Btn>
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
`;

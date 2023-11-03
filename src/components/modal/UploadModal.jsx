import React from "react";
import styled from "styled-components";
import exitImg from "../../assets/icons/x.svg";

export default function UploadModal({ children, onClickHandler, ...props }) {
  return (
    <ModalWrap>
      <ContentList>{children}</ContentList>
      <ExitIcon onClick={onClickHandler} />
    </ModalWrap>
  );
}

const ModalWrap = styled.article`
  width: fit-content;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 60px;
  left: 117px;
`;

const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;

  & li {
    width: 100%;
    text-align: center;
    cursor: pointer;
    padding: 10px 40px;
    font-size: 14px;
  }

  & :first-child::after {
    content: "";
    width: 100%;
    height: 1px;
    display: inline-block;
    border-bottom: 2px solid var(--color-trans-grey);
  }
`;

const ExitIcon = styled.button`
  position: absolute;
  top: 0;
  left: 82%;
  width: 20px;
  height: 20px;
  margin: 8px;
  background-image: url(${exitImg});
  background-size: cover;
`;

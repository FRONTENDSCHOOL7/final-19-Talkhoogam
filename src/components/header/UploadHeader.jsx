import React from "react";
import { BackBtn, HeaderMain, UploadBtn } from "../../styles/HeaderStyled";

export default function UploadHeader({onClickHandler}) {
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }
  return (
    <HeaderMain>
      <BackBtn onClick={goBack} />
      <UploadBtn onClick={onClickHandler}>저장</UploadBtn>
    </HeaderMain>
  );
}

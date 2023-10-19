import React from "react";
import { BackBtn, HeaderMain, UploadBtn } from "../../styles/HeaderStyled";

export default function UploadHeader() {
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }
  return (
    <HeaderMain>
      <BackBtn onClick={goBack} />
      <UploadBtn>저장</UploadBtn>
    </HeaderMain>
  );
}

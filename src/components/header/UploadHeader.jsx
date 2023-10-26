import React from 'react';
import { BackBtn, HeaderMain, UploadBtn } from '../../styles/HeaderStyled';
import iconArrow from '../../assets/icons/icon-arrow-left.svg';

export default function UploadHeader({ onClickHandler }) {
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }
  return (
    <HeaderMain>
      <BackBtn onClick={goBack}>
        <img src={iconArrow} alt="뒤로가기 버튼" />
      </BackBtn>
      <UploadBtn onClick={onClickHandler}>저장</UploadBtn>
    </HeaderMain>
  );
}

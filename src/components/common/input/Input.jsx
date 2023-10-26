import React from "react";
import {InputStyledWrap, LabelStyle, InputStyle} from "../../../styles/InputStyled";

export default function Input(props) {
  const {labelText, type, placeholder, value, maxLength , onChangeHandler} = props;
  return (
    <>
      <InputStyledWrap>
        <LabelStyle>{labelText}</LabelStyle>
        <InputStyle 
          type={type}
          maxLength={maxLength}
          value={value}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </InputStyledWrap>
    </>
  )
}

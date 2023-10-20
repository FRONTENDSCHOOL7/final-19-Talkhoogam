import React from "react";
import {InputStyledWrap, LabelStyle, InputStyle} from "../../../styles/InputStyled";

export default function Input(props) {
  const {labelText, type, onChangeHandler} = props;
  return (
    <>
      <InputStyledWrap>
        <LabelStyle>{labelText}</LabelStyle>
        <InputStyle 
          type={type}
          onChange={(event) =>{
            onChangeHandler(event.target.value);
          }}
        />
      </InputStyledWrap>
    </>
  )
}

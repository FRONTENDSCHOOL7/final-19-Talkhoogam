import React, { useState } from "react";
import { BackBtn, HeaderMain } from "../../styles/HeaderStyled";

export default function SearchHeader() {
  const [value, setValue] = useState("");
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  function searchValue(e) {
    setValue(e.target.value);
  }

  return (
    <HeaderMain>
      <BackBtn onClick={goBack} />
      <label>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={value}
          onChange={searchValue}
        />
      </label>
    </HeaderMain>
  );
}

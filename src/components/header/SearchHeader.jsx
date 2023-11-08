import React, { useEffect, useRef, useState } from "react";
import { BackBtn, HeaderMain } from "../../styles/HeaderStyled";
import iconArrow from "../../assets/icons/icon-arrow-left.svg";
import { useRecoilState } from "recoil";
import { result } from "../../recoil/searchResult";

export default function SearchHeader() {
  const [searchResult, setSearchResult] = useRecoilState(result);

  // 처음 헤더의 input에 focus가 오도록
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // searchInput의 value
  function searchValue(e) {
    setSearchResult(e.target.value);
    console.log(searchResult);
  }

  // 뒤로가기
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  return (
    <HeaderMain>
      <BackBtn onClick={goBack}>
        <img src={iconArrow} alt="뒤로가기 버튼" />
      </BackBtn>
      <label className="a11y-hidden" htmlFor="headerInp" />
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        onChange={searchValue}
        className="searchInput"
        id="headerInp"
        ref={inputRef}
      />
    </HeaderMain>
  );
}

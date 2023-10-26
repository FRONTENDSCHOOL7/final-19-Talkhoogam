import React, { useEffect, useRef, useState } from 'react';
import { BackBtn, HeaderMain } from '../../styles/HeaderStyled';

export default function SearchHeader() {
  // 처음 헤더의 input에 focus가 오도록
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // searchInput의 value
  const [value, setValue] = useState('');
  function searchValue(e) {
    setValue(e.target.value);
  }

  // 뒤로가기
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  return (
    <HeaderMain>
      <BackBtn onClick={goBack} />
      <label className="a11y-hidden" htmlFor="headerInp"></label>
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        value={value}
        onChange={searchValue}
        className="searchInput"
        id="headerInp"
        ref={inputRef}
      />
    </HeaderMain>
  );
}

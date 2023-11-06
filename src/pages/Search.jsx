import React, { useEffect, useRef, useState } from "react";
import { LayoutStyle } from "../styles/LayoutStyled";
import { BackBtn, HeaderMain } from "../styles/HeaderStyled";
import iconArrow from "../assets/icons/icon-arrow-left.svg";
import { useRecoilValue } from "recoil";
import loginToken from "../recoil/loginToken";
import SearchApi from "../api/SearchApi";
import { SearchList } from "../styles/SearchStyled";
import profile from "../assets/images/img-profile.png";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchData, setSearchData] = useState([]);
  const [searchId, setSearchId] = useState("");
  const token = useRecoilValue(loginToken);
  const navigate = useNavigate();

  // 처음 헤더의 input에 focus가 오도록
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // searchInput의 value
  function searchValue(e) {
    setSearchId(e.target.value);
  }

  // 뒤로가기
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => clearTimeout(timer);
    }, [value]);

    return debouncedValue;
  }

  const searchResult = useDebounce(searchId);

  useEffect(() => {
    const setResult = async () => {
      if (searchResult) {
        setSearchData(await SearchApi(token, searchId));
        console.log("검색됨");
      } else {
        setSearchData([]);
      }
    };
    setResult();
  }, [searchResult]);

  const SearchResult = () => {
    return (
      <>
        {searchData.map((item) => (
          <SearchList
            key={item._id}
            onClick={(e) => navigate(`/profile/${item.accountname}`)}
          >
            <img
              src={
                item.image === "http://146.56.183.55:5050/Ellipse.png"
                  ? profile
                  : item.image
              }
              alt="유저 프로필 이미지"
            />
            <div className="search-keyword">
              <p className="user-name">{item.username}</p>
              <p className="user-id">{"@ " + item.accountname}</p>
            </div>
          </SearchList>
        ))}
      </>
    );
  };

  return (
    <LayoutStyle>
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
      {searchId ? <SearchResult /> : null}
    </LayoutStyle>
  );
}

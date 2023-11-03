import React, { useEffect, useRef, useState } from "react";
import { LayoutStyle, LayoutInsideStyle } from "../../styles/LayoutStyled";
import UploadHeader from "../../components/header/UploadHeader";
import PostUploadAPI from "../../api/post/PostUploadAPI";
import ProfileInfoAPI from "../../api/profile/ProfileInfoAPI";
import styled from "styled-components";
import IconUpload from "../../assets/icons/icon-upload.svg";
import ImageUploadAPI from "../../api/upload/ImageUploadAPI";
import { validateImage } from "../../utils/imageValidate";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { author, link, thumbnail, title } from "../../recoil/bookInfo";
import bookImg from "../../assets/images/book.png";
import UploadModal from "../../components/modal/UploadModal";

export default function PostUpload() {
  const [imgSrc, setImgSrc] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [profileInfo, setProfileInfo] = useState(() => {});
  const [inputValue, setInputValue] = useState("");
  const { postUpload } = PostUploadAPI({ inputValue, itemImage });

  const inputImage = useRef(null);
  const textareaRef = useRef();

  // 책 정보 recoil에서 가져오기
  const bookTitle = useRecoilValue(title);
  const bookAuthor = useRecoilValue(author);
  const bookThumb = useRecoilValue(thumbnail);

  // 책 정보 값 상태 확인
  const [bookInfo, setBookInfo] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const hendleResizeHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  // 게시물 업로드
  const onClickHandler = async (e) => {
    e.preventDefault();
    await postUpload();
  };

  // 파일 가져오기
  const handleChangeImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.log("파일 선택이 취소 되었습니다.");
      return null;
    }
    if (file.size > 10 * 1024 * 1024) {
      console.log("이미지 용량은 10MB를 넘을 수 없습니다.");
      return null;
    }

    if (!validateImage(file.name)) {
      console.log("파일 확장자를 확인해 주세요.");
      return null;
    }

    const imageURL = await ImageUploadAPI(file);

    setImgSrc(imageURL);
    setItemImage(imageURL);
    setOpenModal(false);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const info = await ProfileInfoAPI();
        setProfileInfo(info);
      } catch (error) {
        console.error("API 호출 중 오류 발생", error);
      }
    };
    fetchUserData();
  }, []);

  // 책 제목, 저자, 썸네일이 전부 있는 경우 책 정보 상태 값 true로 변경
  useEffect(() => {
    if (bookInfo) {
      setBookInfo(true);
      setItemImage(bookThumb);
    }
  }, []);

  // 모달 창 닫기
  const handleModalClose = (action) => {
    if (action === "imageUpload") {
      handleChangeImage();
    } else if (action === "searchBook") {
      navigate("/searchbook");
    }
    setOpenModal(false);
  };

  const handleUpload = () => {
    // 클릭 시 파일 입력(input) 엘리먼트를 트리거합니다.
    if (inputImage.current) {
      inputImage.current.click();
    }
  };

  // 책 정보 게시물에 등록
  const BookInfo = () => {
    return (
      <Book>
        <img
          onClick={(e) => setOpenModal(true)}
          src={bookThumb || itemImage}
          alt="책 표지"
        />
        <p className="book-title">{bookTitle}</p>
        <p className="book-author">{bookAuthor}</p>
      </Book>
    );
  };

  return (
    <LayoutStyle>
      <h1 className="a11y-hidden">피드 등록 페이지</h1>
      <UploadHeader onClickHandler={onClickHandler}>저장</UploadHeader>
      <LayoutInsideStyle>
        <PositionWrap>
          <ContentWrap>
            {profileInfo ? (
              <>
                <img
                  className="profile-img"
                  src={profileInfo.image}
                  alt="프로필이미지"
                />
                <InputWrap>
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt="업로드 이미지"
                      onClick={(e) => navigate("/searchbook")}
                    />
                  )}

                  {/* 모달 창 */}
                  {openModal && (
                    <UploadModal onClickHandler={handleModalClose}>
                      <li onClick={() => handleModalClose("searchBook")}>
                        책 검색
                      </li>
                      <li onClick={handleUpload}>
                        이미지 업로드
                        <input
                          id="file-upload"
                          onChange={(e) => handleChangeImage(e)}
                          type="file"
                          accept="image/*"
                          ref={inputImage}
                          style={{ display: openModal ? "none" : "block" }}
                        />
                      </li>
                    </UploadModal>
                  )}

                  {/* 책 정보 */}
                  {bookThumb ? <BookInfo /> : null}
                  {itemImage || bookThumb ? null : (
                    <SearchBook onClick={(e) => setOpenModal(true)} />
                  )}

                  <TextArea
                    className="book-report"
                    placeholder="책 후기를 남겨주세요."
                    ref={textareaRef}
                    onChange={(event) => {
                      hendleResizeHeight();
                      setInputValue(event.target.value);
                    }}
                  />
                </InputWrap>
              </>
            ) : (
              <p>로딩 중 ..</p>
            )}
          </ContentWrap>
        </PositionWrap>
      </LayoutInsideStyle>
    </LayoutStyle>
  );
}

const PositionWrap = styled.div`
  position: relative;
  min-height: 500px;
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  /* position: relative; */
  .profile-img {
    width: 42px;
    height: 42px;
    border-radius: 42px;
    object-fit: cover;
  }

  .book-report {
    font-size: 15px;
    box-sizing: border-box;
    font-family: "Pretendard", sans-serif;
  }
`;

const SearchBook = styled.div`
  margin-bottom: 10px;
  width: 300px;
  border-radius: 20px;
  height: 200px;
  background-color: var(--color-trans-grey);
  border: 2px solid #e7e7e7;
  cursor: pointer;

  background-image: url(${bookImg});
  background-size: 60px;
  background-repeat: no-repeat;
  background-position: center center;
`;

const InputWrap = styled.div`
  width: 304px;

  img {
    background-color: var(--color-trans-grey);
    border: 2px solid #e7e7e7;
    width: 300px;
    height: 200px;
    border-radius: 20px;
    object-fit: contain;

    cursor: pointer;
  }
`;

const Book = styled.div`
  line-height: 2rem;

  & .book-title {
    font-size: 18px;
    line-height: 1.2rem;
    font-weight: bold;
  }

  & .book-author {
    color: #474646;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const TextArea = styled.textarea`
  padding: 0;
  width: 100%;
  border: none;
  resize: none;
  caret-color: var(--color-mainColor);

  &:focus {
    outline: none;
  }
`;

const UploadButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

import React, { useEffect, useRef, useState } from "react";
import {
  ImgLabel,
  ImgUploadBtn,
  ImgUploader,
  ImgWrapper,
  PageTitle,
  ProfileImg,
  SetProfileForm,
} from "../styles/SetProfileStyled";
import profile from "../assets/images/img-profile.png";
import {
  NextBtn,
  PageArticle,
  JoinInput,
  JoinLabel,
  ErrorText,
} from "../styles/JoinStyled";
import imgBtn from "../assets/images/img-btn.svg";
import { emailState, pwState } from "../recoil/joinData";
import { useRecoilValue } from "recoil";

export default function SetProfile() {
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [nicknameErr, setNicknameErr] = useState("");
  const [userIdErr, setUserIdErr] = useState("");
  const [introErr, setIntroErr] = useState("");
  const [Image, setImage] = useState(null);
  const [btnState, SetBtnState] = useState(true);
  const InputFile = useRef(null);

  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);

  const NicknameValue = (e) => {
    setNickname(e.target.value);
  };

  const UserIdValue = (e) => {
    setUserId(e.target.value);
  };

  const IntroValue = (e) => {
    setIntro(e.target.value);
  };

  const NicknameValid = () => {
    if (!nickname) {
      setNicknameErr("필수 입력 항목입니다.");
    } else {
      setNicknameErr("");
    }
    handleValid();
  };

  const UserIdValid = () => {
    if (!userId) {
      setUserIdErr("필수 입력 항목입니다.");
    } else {
      setUserIdErr("");
    }
    handleValid();
  };

  const IntroValid = () => {
    if (!intro) {
      setIntroErr("필수 입력 항목입니다.");
    } else {
      setIntroErr("");
    }
    handleValid();
  };

  const handleValid = () => {
    if (
      !nicknameErr &&
      !userIdErr &&
      !introErr &&
      nickname &&
      userId &&
      intro
    ) {
      SetBtnState(false);
    } else {
      SetBtnState(true);
    }
  };

  useEffect(() => {
    handleValid();
  }, [nickname, userId, intro]);

  const UploadImage = (e) => {
    e.target.files[0]
      ? setImage(URL.createObjectURL(e.target.files[0]))
      : setImage({ profile });
  };

  return (
    <PageArticle>
      <PageTitle>프로필 설정</PageTitle>
      <SetProfileForm>
        <ImgLabel>
          <ImgWrapper>
            <ProfileImg src={Image || profile} />
            <ImgUploadBtn src={imgBtn} />
            <ImgUploader
              type="file"
              id="img-file"
              onChange={UploadImage}
              ref={InputFile}
            />
          </ImgWrapper>
        </ImgLabel>

        <JoinLabel htmlFor="nickname">닉네임</JoinLabel>
        <JoinInput
          type="text"
          id="nickname"
          placeholder="닉네임"
          onChange={NicknameValue}
          onBlur={NicknameValid}
        />
        <ErrorText>{nicknameErr}</ErrorText>

        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <JoinInput
          type="text"
          id="id"
          placeholder="아이디"
          onChange={UserIdValue}
          onBlur={UserIdValid}
        />
        <ErrorText>{userIdErr}</ErrorText>

        <JoinLabel htmlFor="intro">소개</JoinLabel>
        <JoinInput
          type="text"
          id="intro"
          placeholder="소개"
          onChange={IntroValue}
          onBlur={IntroValid}
        />
        <ErrorText>{introErr}</ErrorText>
        <NextBtn disabled={btnState}>가입하기</NextBtn>
      </SetProfileForm>
    </PageArticle>
  );
}

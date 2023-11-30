import React, { useEffect, useRef, useState } from "react";
import {
  ImgLabel,
  ImgUploader,
  ImgWrapper,
  PageTitle,
  ProfileImg,
  SetProfileForm,
} from "../../styles/SetProfileStyled";
import profile from "../../assets/images/img-profile.png";
import {
  NextBtn,
  PageArticle,
  UnderInput,
  InputLabel,
  ErrorText,
  InforText,
  InputWrap,
} from "../../styles/JoinStyled";
import { emailState, newToken, userData, pwState } from "../../recoil/joinData";
import { useRecoilState, useRecoilValue } from "recoil";
import JoinApi from "../../api/JoinApi";
import { useNavigate } from "react-router-dom";
import ImageUploadAPI from "../../api/upload/ImageUploadAPI";
import useValid from "../../hook/useValid";

export default function SetProfile() {
  // 닉네임, 아이디, 소개, 이미지 파일 상태 관리
  const [form, setForm] = useState({
    userName: "",
    userId: "",
    intro: "",
    image: null,
  });
  const InputFile = useRef(null);

  // 이메일, 패스워드 상태 관리(리코일)
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);

  // 토큰, 유저 데이터 상태 관리(리코일)
  const [token, setToken] = useRecoilState(newToken);
  const [user, setUser] = useRecoilState(userData);

  // useNavigate 사용
  const navigate = useNavigate();

  const {
    error,
    UserNameValid,
    UserIdValid,
    IntroValid,
    btnState,
    HandleJoin,
  } = useValid(form);

  const [validError, setValidError] = useState(error);

  useEffect(() => {
    setValidError(error);
  }, [error]);

  // userName, userId, intro 값을 useState에 저장
  const UserNameValue = (e) => {
    setForm({ ...form, userName: e.target.value });
  };

  const UserIdValue = (e) => {
    setForm({ ...form, userId: e.target.value });
  };

  const IntroValue = (e) => {
    setForm({ ...form, intro: e.target.value });
  };

  // 이미지 업로드
  const UploadImage = async (e) => {
    const image = e.target.files[0];
    const imageRes = await ImageUploadAPI(image);
    if (imageRes) {
      setForm({ ...form, image: imageRes });
    } else {
      setForm({ ...form, image: profile });
    }
  };

  return (
    <PageArticle>
      <PageTitle>프로필 설정</PageTitle>
      <SetProfileForm>
        <ImgWrapper>
          <ProfileImg src={form.image || profile} />
          <ImgLabel htmlFor="img-file" />
          <ImgUploader
            type="file"
            id="img-file"
            accept="image/*"
            onChange={(e) => UploadImage(e)}
            ref={InputFile}
          />
        </ImgWrapper>
        <InputWrap>
          <InputLabel htmlFor="nickname">닉네임</InputLabel>
          <InforText>2~10자</InforText>
        </InputWrap>
        <UnderInput
          type="text"
          id="nickname"
          placeholder="닉네임"
          onChange={UserNameValue}
          onBlur={() => UserNameValid(form.userName)}
        />
        <ErrorText>{error.userNameErr}</ErrorText>
        <InputWrap>
          <InputLabel htmlFor="id">아이디</InputLabel>
          <InforText>5자 이상 영문, 숫자, 특수기호(_), (.)</InforText>
        </InputWrap>
        <UnderInput
          type="text"
          id="id"
          placeholder="아이디"
          onChange={UserIdValue}
          onBlur={() => UserIdValid(form.userId)}
        />
        <ErrorText>{error.userIdErr}</ErrorText>
        <InputWrap>
          <InputLabel htmlFor="intro">소개</InputLabel>
          <InforText>40자 이내</InforText>
        </InputWrap>
        <UnderInput
          type="text"
          id="intro"
          placeholder="소개"
          maxLength={40}
          onChange={IntroValue}
          onBlur={() => IntroValid(form.intro)}
        />
        <ErrorText>{error.introErr}</ErrorText>
        <NextBtn onClick={HandleJoin} disabled={btnState}>
          가입하기
        </NextBtn>
      </SetProfileForm>
    </PageArticle>
  );
}

import React, { useRef, useState } from "react";
import {
  ImgLabel,
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

export default function SetProfile() {
  const [Image, setImage] = useState(null);
  const InputFile = useRef(null);

  const UploadImage = (e) => {
    e.target.files[0]
      ? setImage(URL.createObjectURL(e.target.files[0]))
      : setImage({ profile });
  };

  return (
    <PageArticle>
      <PageTitle>프로필 설정</PageTitle>
      <ImgWrapper>
        <ProfileImg src={Image || profile} />
        <ImgLabel htmlFor="img-file" />
        <ImgUploader
          type="file"
          id="img-file"
          onChange={UploadImage}
          ref={InputFile}
        />
      </ImgWrapper>

      <SetProfileForm>
        <JoinLabel htmlFor="nickname">닉네임</JoinLabel>
        <JoinInput type="text" id="nickname" placeholder="닉네임" />
        <ErrorText />

        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <JoinInput type="text" id="id" placeholder="아이디" />
        <ErrorText />

        <JoinLabel htmlFor="intro">소개</JoinLabel>
        <JoinInput type="text" id="intro" placeholder="소개" />
        <ErrorText />
        <NextBtn>가입하기</NextBtn>
      </SetProfileForm>
    </PageArticle>
  );
}

import React, { useEffect, useRef, useState } from "react";
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
import { emailState, newToken, userData, pwState } from "../recoil/joinData";
import { useRecoilState, useRecoilValue } from "recoil";
import JoinApi from "../api/JoinApi";
import { useNavigate } from "react-router-dom";

export default function SetProfile() {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [userIdErr, setUserIdErr] = useState("");
  const [introErr, setIntroErr] = useState("");
  const [image, setImage] = useState(null);
  const [btnState, SetBtnState] = useState(true);
  const InputFile = useRef(null);

  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);
  // 이메일, 패스워드 상태 관리
  const [token, setToken] = useRecoilState(newToken);
  const [user, setUser] = useRecoilState(userData);

  const navigate = useNavigate();

  const UsernameValue = (e) => {
    setUsername(e.target.value);
  };

  const UserIdValue = (e) => {
    setUserId(e.target.value);
  };

  const IntroValue = (e) => {
    setIntro(e.target.value);
  };

  const UsernameValid = () => {
    if (!username) {
      setUsernameErr("필수 입력 항목입니다.");
    } else {
      setUsernameErr("");
    }
  };

  const UserIdValid = () => {
    if (!userId) {
      setUserIdErr("필수 입력 항목입니다.");
    } else {
      setUserIdErr("");
    }
  };

  const IntroValid = () => {
    if (!intro) {
      setIntroErr("필수 입력 항목입니다.");
    } else {
      setIntroErr("");
    }
  };

  const handleValid = () => {
    if (
      !usernameErr &&
      !userIdErr &&
      !introErr &&
      username &&
      userId &&
      intro
    ) {
      SetBtnState(false);
    } else {
      SetBtnState(true);
    }
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    console.log("handleJoin");
    const JoinRes = await JoinApi(
      username,
      email,
      password,
      userId,
      intro,
      image
    );
    if (JoinRes.status !== 422) {
      console.log(JoinRes);
      const createToken = JoinRes.user.token;
      const joinData = JoinRes.user;
      setToken(createToken);
      setUser(joinData);
      navigate("/login");
    } else {
      setUserIdErr("이미 사용 중인 아이디입니다.");
      SetBtnState(true);
    }
  };

  useEffect(() => {
    handleValid();
  }, [username, userId, intro]);

  const UploadImage = (e) => {
    e.target.files[0]
      ? setImage(URL.createObjectURL(e.target.files[0]))
      : setImage(profile);
  };

  return (
    <PageArticle>
      <PageTitle>프로필 설정</PageTitle>
      <SetProfileForm>
        <ImgWrapper>
          <ProfileImg src={image || profile} />
          <ImgLabel htmlFor="img-file" />
          <ImgUploader
            type="file"
            id="img-file"
            onChange={UploadImage}
            ref={InputFile}
          />
        </ImgWrapper>

        <JoinLabel htmlFor="nickname">닉네임</JoinLabel>
        <JoinInput
          type="text"
          id="nickname"
          placeholder="닉네임"
          onChange={UsernameValue}
          onBlur={UsernameValid}
        />
        <ErrorText>{usernameErr}</ErrorText>

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
        <NextBtn onClick={handleJoin} disabled={btnState}>
          가입하기
        </NextBtn>
      </SetProfileForm>
    </PageArticle>
  );
}

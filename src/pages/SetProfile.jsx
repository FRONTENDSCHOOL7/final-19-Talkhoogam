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
  InforText,
} from "../styles/JoinStyled";
import { emailState, newToken, userData, pwState } from "../recoil/joinData";
import { useRecoilState, useRecoilValue } from "recoil";
import JoinApi from "../api/JoinApi";
import { useNavigate } from "react-router-dom";

export default function SetProfile() {
  // 닉네임, 아이디, 소개, 이미지 파일 상태 관리
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState(null);
  const InputFile = useRef(null);

  // 닉네임 에러, 아이디 에러, 소개 에러 상태 관리
  const [usernameErr, setUsernameErr] = useState("");
  const [userIdErr, setUserIdErr] = useState("");
  const [introErr, setIntroErr] = useState("");

  // 버튼 비활성화 상태 관리
  const [btnState, SetBtnState] = useState(true);

  // 이메일, 패스워드 상태 관리(리코일)
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);

  // 토큰, 유저 데이터 상태 관리(리코일)
  const [token, setToken] = useRecoilState(newToken);
  const [user, setUser] = useRecoilState(userData);

  // useNavigate 사용
  const navigate = useNavigate();

  // input value 값을 useState에 저장
  const UsernameValue = (e) => {
    setUsername(e.target.value);
  };

  const UserIdValue = (e) => {
    setUserId(e.target.value);
  };

  const IntroValue = (e) => {
    setIntro(e.target.value);
  };

  // 각 input 유효성 검사
  const UsernameValid = () => {
    if (!username) {
      setUsernameErr("필수 입력 항목입니다.");
    } else if (username.length < 2) {
      setUsernameErr("2자 이상 닉네임을 입력해 주세요.");
    } else if (username.length > 10) {
      setUsernameErr("10자 이하 닉네임을 입력해 주세요.");
    } else {
      setUsernameErr("");
    }
  };

  // 아이디 조건(정규 표현식)
  const userIdReg = /^[A-Za-z0-9_.]{5,}$/;

  const UserIdValid = () => {
    if (!userId) {
      setUserIdErr("필수 입력 항목입니다.");
    } else if (!userIdReg.test(userId)) {
      setUserIdErr("아이디 형식이 올바르지 않습니다.");
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

  // 버튼 활성화
  const btnActive = () => {
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

  // input창이 바뀔 때마다 btnActive로 확인 후 버튼 활성화
  useEffect(() => {
    btnActive();
  }, [username, userId, intro]);

  // api 호출, 성공 시 로그인 페이지로 이동
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

  // 이미지 업로드
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
        <InforText>(2~10자)</InforText>
        <JoinInput
          type="text"
          id="nickname"
          placeholder="닉네임"
          onChange={UsernameValue}
          onBlur={UsernameValid}
        />
        <ErrorText>{usernameErr}</ErrorText>

        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <InforText>
          5글자 이상의 영문, 숫자, 특수기호(_), (.)만 사용 가능합니다.
        </InforText>
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

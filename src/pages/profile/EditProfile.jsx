import React, { useEffect, useRef, useState } from "react";
import {
  InforText,
  InputLabel,
  PageArticle,
  UnderInput,
  ErrorText,
} from "../../styles/JoinStyled";
import {
  SetProfileForm,
  PageTitle,
  ImgWrapper,
  ProfileImg,
  ImgLabel,
  ImgUploader,
} from "../../styles/SetProfileStyled";
import ProfileInfoAPI from "../../api/profile/ProfileInfoAPI";
import Button from "../../components/common/button/Button";
import IdValidApi from "../../api/IdValidApi";
import EditProfileApi from "../../api/EditProfileApi";
import { useRecoilState } from "recoil";
import loginToken from "../../recoil/loginToken";

export default function EditProfile() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState(null);
  const InputFile = useRef(null);

  // 닉네임 에러, 아이디 에러, 소개 에러 상태 관리
  const [usernameErr, setUsernameErr] = useState("");
  const [userIdErr, setUserIdErr] = useState("");
  const [introErr, setIntroErr] = useState("");

  const [token, setToken] = useRecoilState(loginToken);

  const [btnState, SetBtnState] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const userRes = await ProfileInfoAPI();
      setUsername(userRes.username);
      setUserId(userRes.accountname);
      setIntro(userRes.intro);
      setImage(userRes.image);
    }
    fetchData();
  }, []);

  const UploadImage = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setImage(data.image);
    }
  };

  // username, userId, intro 값을 useState에 저장
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

  const UserIdValid = async () => {
    if (!userId) {
      setUserIdErr("필수 입력 항목입니다.");
    } else if (!userIdReg.test(userId)) {
      setUserIdErr("아이디 형식이 올바르지 않습니다.");
    } else {
      const idValidRes = await IdValidApi(userId);
      setUserIdErr(idValidRes);
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

  // 프로필 수정 api

  const EditData = async (e) => {
    e.preventDefault();
    const res = await EditProfileApi(token, username, userId, intro, image);
    if (res.statue !== 422) {
      console.log("수정 성공");
    } else {
      console.error("수정 실패");
    }
  };

  return (
    <PageArticle>
      <PageTitle>프로필 수정</PageTitle>
      <SetProfileForm>
        <ImgWrapper>
          <ProfileImg src={image} />
          <ImgLabel htmlFor="img-file" />
          <ImgUploader
            type="file"
            id="img-file"
            accept="image/*"
            onChange={UploadImage}
            ref={InputFile}
          />
        </ImgWrapper>

        <InputLabel htmlFor="nickname">닉네임</InputLabel>
        <InforText>(2~10자)</InforText>
        <UnderInput
          type="text"
          id="nickname"
          placeholder="닉네임"
          value={username}
          onBlur={UsernameValid}
          onChange={UsernameValue}
        />
        <ErrorText>{usernameErr}</ErrorText>

        <InputLabel htmlFor="id">아이디</InputLabel>
        <InforText>
          5글자 이상의 영문, 숫자, 특수기호(_), (.)만 사용 가능합니다.
        </InforText>
        <UnderInput
          type="text"
          id="id"
          placeholder="아이디"
          value={userId}
          onBlur={UserIdValid}
          onChange={UserIdValue}
        />
        <ErrorText>{userIdErr}</ErrorText>

        <InputLabel htmlFor="intro">소개</InputLabel>
        <UnderInput
          type="text"
          id="intro"
          placeholder="소개"
          value={intro}
          onBlur={IntroValid}
          onChange={IntroValue}
        />
        <ErrorText>{introErr}</ErrorText>
        <Button onClick={EditData} disabled={btnState}>
          수정하기
        </Button>
      </SetProfileForm>
    </PageArticle>
  );
}

import React, { useEffect, useRef, useState } from "react";
import {
  InforText,
  InputLabel,
  PageArticle,
  UnderInput,
  ErrorText,
  NextBtn,
  InputWrap,
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
import IdValidApi from "../../api/IdValidApi";
import EditProfileApi from "../../api/EditProfileApi";
import { useRecoilState } from "recoil";
import loginToken from "../../recoil/loginToken";
import ImageUploadAPI from "../../api/upload/ImageUploadAPI";
import { useNavigate } from "react-router-dom";
import accountname from "../../recoil/accountname";
import BasicHeader from "../../components/header/BasicHeader";
import { LayoutStyle } from "../../styles/LayoutStyled";

export default function EditProfile() {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState(null);
  const InputFile = useRef(null);
  const navigate = useNavigate();
  const [editId, setEditId] = useRecoilState(accountname);

  // 닉네임 에러, 아이디 에러, 소개 에러 상태 관리
  const [usernameErr, setUsernameErr] = useState("");
  const [userIdErr, setUserIdErr] = useState("");
  const [introErr, setIntroErr] = useState("");

  const [token, setToken] = useRecoilState(loginToken);

  const [btnState, SetBtnState] = useState(false);

  // 최초 렌더링 시 각 input value에 기존 정보 값 입력
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

  const UploadImage = async (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    const image = e.target.files[0];
    const imageRes = await ImageUploadAPI(image);
    if (imageRes) {
      setImage(imageRes);
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
  const BtnActive = () => {
    if (username && userId && intro) {
      if (
        (!usernameErr &&
          // 아이디를 변경한 경우 아이디 중복 확인, 변경하지 않은 경우 에러 메시지가 출력되지 않아야 함
          userIdErr === "사용 가능한 계정ID 입니다.") ||
        (!userIdErr && !introErr)
      ) {
        console.log("활성화");
        SetBtnState(false);
      } else {
        console.log("비활성화");
        SetBtnState(true);
      }
    }
  };

  // 프로필 수정 api
  const EditData = async (e) => {
    e.preventDefault();
    console.log("dd");
    const res = await EditProfileApi(token, username, userId, intro, image);

    //recoil에서 관리하는 accountname에도 값 저장
    setEditId(userId);
    navigate(`/profile/${userId}`);
  };

  return (
    <LayoutStyle>
      <BasicHeader />
      <PageArticle>
        <PageTitle style={{ marginTop: "0px" }}>프로필 수정</PageTitle>
        <SetProfileForm>
          <ImgWrapper>
            <ProfileImg src={image} />
            <ImgLabel htmlFor="img-file" />
            <ImgUploader
              type="file"
              id="img-file"
              accept="image/*"
              onChange={(e) => {
                UploadImage(e);
                BtnActive();
              }}
              ref={InputFile}
            />
          </ImgWrapper>

          <InputWrap>
            <InputLabel htmlFor="nickname">닉네임</InputLabel>
            <InforText>2~10자 이내</InforText>
          </InputWrap>
          <UnderInput
            type="text"
            id="nickname"
            placeholder="닉네임"
            value={username}
            onBlur={(e) => {
              UsernameValid(e);
              BtnActive();
            }}
            onChange={UsernameValue}
          />
          <ErrorText>{usernameErr}</ErrorText>

          <InputWrap>
            <InputLabel htmlFor="id">아이디</InputLabel>
            <InforText>5글자 이상의 영문, 숫자, 특수기호(_), (.)</InforText>
          </InputWrap>
          <UnderInput
            type="text"
            id="id"
            placeholder="아이디"
            value={userId}
            onBlur={(e) => {
              UserIdValid(e);
              BtnActive();
            }}
            onChange={UserIdValue}
          />
          <ErrorText>{userIdErr}</ErrorText>

          <InputWrap>
            <InputLabel htmlFor="intro">소개</InputLabel>
            <InforText>40자 이내</InforText>
          </InputWrap>
          <UnderInput
            type="text"
            id="intro"
            placeholder="소개"
            value={intro}
            onBlur={(e) => {
              IntroValid(e);
              BtnActive();
            }}
            onChange={IntroValue}
          />
          <ErrorText>{introErr}</ErrorText>
          <NextBtn onClick={EditData} disabled={btnState}>
            수정하기
          </NextBtn>
        </SetProfileForm>
      </PageArticle>
    </LayoutStyle>
  );
}

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
import EditProfileApi from "../../api/EditProfileApi";
import { useRecoilState } from "recoil";
import ImageUploadAPI from "../../api/upload/ImageUploadAPI";
import { useNavigate } from "react-router-dom";
import accountname from "../../recoil/accountname";
import BasicHeader from "../../components/header/BasicHeader";
import { LayoutStyle } from "../../styles/LayoutStyled";
import useValid from "../../hook/useValid";
import loginToken from "../../recoil/loginToken";

export default function EditProfile() {
  const [data, setData] = useState({});
  const [token, setToken] = useRecoilState(loginToken);

  // 닉네임, 아이디, 소개, 이미지 상태 관리
  const [form, setForm] = useState({
    userName: "",
    userId: "",
    intro: "",
    image: null,
  });
  const InputFile = useRef(null);

  const navigate = useNavigate();
  const [editId, setEditId] = useRecoilState(accountname);

  // 최초 렌더링 시 각 input value에 기존 정보 값 입력
  useEffect(() => {
    async function fetchData() {
      const userRes = await ProfileInfoAPI();
      setForm({
        ...form,
        userName: userRes.username,
        userId: userRes.accountname,
        intro: userRes.intro,
        image: userRes.image,
      });
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
      setForm({ ...form, image: imageRes });
    } else {
      setForm({ ...form, image: data.image });
    }
  };

  // username, userId, intro 값을 useState에 저장
  const UsernameValue = (e) => {
    setForm({ ...form, userName: e.target.value });
  };

  const UserIdValue = (e) => {
    setForm({ ...form, userId: e.target.value });
  };

  const IntroValue = (e) => {
    setForm({ ...form, intro: e.target.value });
  };

  const {
    error,
    UserNameValid,
    UserIdValid,
    IntroValid,
    btnState,
    EditBtnActive,
  } = useValid(form);
  const [validError, setValidError] = useState(error);

  useEffect(() => {
    setValidError(error);
  }, [error]);

  useEffect(() => {
    EditBtnActive();
  }, [form.userName, form.userId, form.intro]);

  // 프로필 수정 api
  const EditData = async (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    const res = await EditProfileApi(
      token,
      form.userName,
      form.userId,
      form.intro,
      form.image
    );

    //recoil에서 관리하는 accountname에도 값 저장
    setEditId(form.userId);
    navigate(`/profile/${form.userId}`);
  };

  return (
    <LayoutStyle>
      <BasicHeader />
      <PageArticle>
        <PageTitle style={{ marginTop: "0px" }}>프로필 수정</PageTitle>
        <SetProfileForm>
          <ImgWrapper>
            <ProfileImg src={form.image} />
            <ImgLabel htmlFor="img-file" />
            <ImgUploader
              type="file"
              id="img-file"
              accept="image/*"
              onChange={(e) => {
                UploadImage(e);
                EditBtnActive();
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
            value={form.userName}
            onBlur={() => UserNameValid(form.userName)}
            onChange={UsernameValue}
          />
          <ErrorText>{error.userNameErr}</ErrorText>

          <InputWrap>
            <InputLabel htmlFor="id">아이디</InputLabel>
            <InforText>5글자 이상의 영문, 숫자, 특수기호(_), (.)</InforText>
          </InputWrap>
          <UnderInput
            type="text"
            id="id"
            placeholder="아이디"
            value={form.userId}
            onBlur={() => UserIdValid(form.userId)}
            onChange={UserIdValue}
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
            value={form.intro}
            onBlur={(e) => {
              IntroValid(form.intro);
              EditBtnActive();
            }}
            onChange={IntroValue}
          />
          <ErrorText>{error.introErr}</ErrorText>
          <NextBtn onClick={EditData} disabled={btnState}>
            수정하기
          </NextBtn>
        </SetProfileForm>
      </PageArticle>
    </LayoutStyle>
  );
}

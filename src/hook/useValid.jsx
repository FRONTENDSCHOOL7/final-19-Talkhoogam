import React, { useEffect, useRef, useState } from "react";
import IdValidApi from "../api/IdValidApi";
import JoinApi from "../api/JoinApi";
import { useRecoilState, useRecoilValue } from "recoil";
import { emailState, newToken, pwState, userData } from "../recoil/joinData";
import { useNavigate } from "react-router-dom";

export const useValid = (form) => {
  // 이메일, 패스워드 상태 관리(리코일)
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);

  // 버튼 비활성화 상태 관리
  const [btnState, setBtnState] = useState(true);

  // 에러 메시지 상태 관리
  const [error, setError] = useState({
    userNameErr: "",
    userIdErr: "",
    introErr: "",
  });

  // 토큰, 유저 데이터 상태 관리(리코일)
  const [token, setToken] = useRecoilState(newToken);
  const [user, setUser] = useRecoilState(userData);

  // useNavigate 사용
  const navigate = useNavigate();

  // 각 input 유효성 검사
  const UserNameValid = () => {
    if (!form.userName) {
      setError({ ...error, userNameErr: "필수 입력 항목입니다." });
    } else if (form.userName.length < 2) {
      setError({ ...error, userNameErr: "2자 이상 닉네임을 입력해 주세요." });
    } else if (form.userName.length > 10) {
      setError({ ...error, userNameErr: "10자 이하 닉네임을 입력해 주세요." });
    } else {
      setError({ ...error, userNameErr: "" });
    }
  };

  // 아이디 조건(정규 표현식)
  const userIdReg = /^[A-Za-z0-9_.]{5,}$/;

  const UserIdValid = async () => {
    if (!form.userId) {
      setError({ ...error, userIdErr: "필수 입력 항목입니다." });
    } else if (!userIdReg.test(form.userId)) {
      setError({ ...error, userIdErr: "아이디 형식이 올바르지 않습니다." });
    } else {
      const idValidRes = await IdValidApi(form.userId);
      setError({ ...error, userIdErr: idValidRes });
    }
  };

  const IntroValid = () => {
    if (!form.intro) {
      setError({ ...error, introErr: "필수 입력 항목입니다." });
    } else {
      setError({ ...error, introErr: "" });
    }
  };

  // useEffect(() => {
  //   BtnActive(form, error);
  // }, [form, error, BtnActive]);

  // api 호출, 성공 시 로그인 페이지로 이동
  const HandleJoin = async (e) => {
    e.preventDefault();

    const JoinRes = await JoinApi(
      form.userName,
      email,
      password,
      form.userId,
      form.intro,
      form.image
    );
    if (JoinRes.status !== 422) {
      console.log(JoinRes);
      const createToken = JoinRes.user.token;
      const joinData = JoinRes.user;
      setToken(createToken);
      setUser(joinData);
      navigate("/login");
    } else {
      setError({ ...error, userIdErr: "이미 사용 중인 아이디입니다." });
      setBtnState(true);
    }
  };

  const SetBtnActive = () => {
    if (
      !error.userNameErr &&
      error.userIdErr === "사용 가능한 계정ID 입니다." &&
      !error.introErr &&
      form.userName &&
      form.userId &&
      form.intro
    ) {
      setBtnState(false);
    } else {
      setBtnState(true);
    }
  };

  const EditBtnActive = () => {
    if (
      form.userName &&
      form.userId &&
      form.intro &&
      !error.userNameErr &&
      error.userIdErr === "사용 가능한 계정ID 입니다." &&
      !error.userIdErr &&
      !error.introErr
    ) {
      console.log("활성화");
      setBtnState(false);
    } else {
      console.log("비활성화");
      setBtnState(true);
    }
  };

  return {
    error,
    UserNameValid,
    UserIdValid,
    IntroValid,
    HandleJoin,
    SetBtnActive,
    EditBtnActive,
  };
};

export default useValid;

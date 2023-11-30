import React, { useEffect, useState } from "react";
import {
  ErrorText,
  InforText,
  JoinForm,
  UnderInput,
  InputLabel,
  NextBtn,
  PageArticle,
  Title,
  InputWrap,
} from "../styles/JoinStyled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { emailState, pwState } from "../recoil/joinData";
import EmailValidApi from "../api/EmailValidApi";

export default function Join() {
  // 이메일, 패스워드 상태 관리
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(pwState);
  const [pwCheck, setPwCheck] = useState("");

  // 에러 메시지 상태 관리
  const [emailErr, setEmailErr] = useState("");
  const [pwErr, setPwErr] = useState("");
  const [pwCheckErr, setPwCheckErr] = useState("");

  // 버튼 활성화 상태 관리
  const [btnState, SetBtnState] = useState(true);

  // useNavigate 사용
  const navigate = useNavigate();

  // email, password, pwcheck 값을 useState에 저장
  const EmailValue = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const PasswordValue = (e) => {
    setPassword(e.target.value);
    setPwErr("");
  };

  const PwCheckValue = (e) => {
    setPwCheck(e.target.value);
    setPwCheckErr("");
  };

  // 이메일 유효성 검사 => 통과 시 이메일 검증
  const EmailValid = async (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr("필수 입력 항목입니다.");
    } else if (!email.includes("@")) {
      setEmailErr("이메일 형식이 올바르지 않습니다.");
    } else {
      const emailValidRes = await EmailValidApi(email);
      setEmailErr(emailValidRes);
    }
    handleValid();
  };

  // 비밀번호 조건(정규 표현식)
  const passwordReg = /^(?=.*[a-z])(?=.*\d).{6,}$/;

  // 비밀번호 유효성 검사
  const PasswordValid = (e) => {
    if (!password) {
      setPwErr("필수 입력 항목입니다.");
    } else if (!passwordReg.test(password)) {
      setPwErr("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPwErr("");
    }
    handleValid();
  };

  // 비밀번호 확인 유효성 검사
  const PwCheckValid = (e) => {
    if (!pwCheck) {
      setPwCheckErr("필수 입력 항목입니다.");
    } else if (password !== pwCheck) {
      setPwCheckErr("비밀번호가 일치하지 않습니다.");
    } else {
      setPwCheckErr("");
    }
    handleValid();
  };

  // 전체 필수 값, 에러 메시지 확인 후 버튼 활성화 또는 비활성화
  const handleValid = () => {
    if (email && password && pwCheck) {
      if (emailErr === "사용 가능한 이메일 입니다." && !pwErr && !pwCheckErr) {
        SetBtnState(false);
      }
    } else {
      SetBtnState(true);
    }
  };

  // input 값 변할 때마다 버튼 활성화 확인
  useEffect(() => {
    handleValid();
  }, [email, password, pwCheck, emailErr, pwErr, pwCheckErr]);

  // 버튼 활성화일 경우 프로필 설정 페이지로 이동
  const MoveSetProfile = (e) => {
    e.preventDefault();
    navigate("/setProfile");
  };

  return (
    <PageArticle>
      <Title>회원가입</Title>
      <JoinForm>
        <InputLabel htmlFor="email">이메일</InputLabel>
        <UnderInput
          type="email"
          placeholder="이메일"
          onChange={EmailValue}
          onBlur={EmailValid}
        />
        <ErrorText>{emailErr}</ErrorText>

        <InputWrap>
          <InputLabel htmlFor="password">비밀번호</InputLabel>
          <InforText>영어 소문자, 숫자 포함 6자 이상</InforText>
        </InputWrap>
        <UnderInput
          type="password"
          placeholder="비밀번호"
          minLength="6"
          maxLength="20"
          onChange={PasswordValue}
          onBlur={(e) => {
            PasswordValid(e);
            PwCheckValid(e);
          }}
        />
        <ErrorText>{pwErr}</ErrorText>

        <InputLabel htmlFor="password">비밀번호 확인</InputLabel>
        <UnderInput
          type="password"
          placeholder="비밀번호 확인"
          minLength="6"
          maxLength="20"
          onChange={PwCheckValue}
          onBlur={PwCheckValid}
        />
        <ErrorText>{pwCheckErr}</ErrorText>

        <NextBtn onClick={MoveSetProfile} disabled={btnState}>
          다음
        </NextBtn>
      </JoinForm>
    </PageArticle>
  );
}

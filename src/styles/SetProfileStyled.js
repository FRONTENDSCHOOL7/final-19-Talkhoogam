import styled from "styled-components";
import { JoinForm, Title } from "./JoinStyled";
import imgBtn from "../assets/images/img-btn.svg";

export const PageTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 25px;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const ImgLabel = styled.label`
  width: 120px; // ProfileImg 와 사이즈 동일하게
  height: 120px; // ProfileImg 와 사이즈 동일하게
  margin: 0 auto;
  cursor: pointer;

  background-image: url(${imgBtn}); // background로 이미지 버튼 추가하고
  background-size: 36px 36px;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-position, transform, translate, absolute 작동원리를 아셔야 합니다. */
  background-position: 78px 74px; // background로 position으로 위치 조정
  margin: 0 auto;
  position: absolute;
  top: -5px; // 세부 위치 조정 (오른쪽 아래)
  left: 115px;
`;

export const ImgUploader = styled.input`
  display: none;
`;

export const SetProfileForm = styled(JoinForm)`
  margin-top: 10px;
`;

import styled from "styled-components";
import { JoinForm, Title } from "./JoinStyled";
import imgBtn from "../assets/images/img-btn.svg";

export const PageTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

export const ImgLabel = styled.label`
  width: 36px;
  height: 36px;
  margin: 0 auto;
  cursor: pointer;

  background-image: url(${imgBtn});
  background-size: 36px 36px;
  background-repeat: no-repeat;
  background-position: center center;
  position: absolute;
  top: 62%;
  left: 57%;
`;

export const ImgUploader = styled.input`
  display: none;
`;

export const SetProfileForm = styled(JoinForm)`
  margin-top: 10px;
`;

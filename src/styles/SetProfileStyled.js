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
  width: 120px;
  height: 120px;
  margin: 0 auto;
  cursor: pointer;

  background-image: url(${imgBtn});
  background-size: 36px 36px;
  background-repeat: no-repeat;
  background-position: center center;
  background-position: 78px 74px;
  margin: 0 auto;
  position: absolute;
  top: -5px;
  left: 115px;

  &::after {
    content: "";
    width: 90px;
    height: 90px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: -1;
  }
`;

export const ImgUploader = styled.input`
  display: none;
`;

export const SetProfileForm = styled(JoinForm)`
  margin-top: 10px;
`;

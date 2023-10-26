import styled from "styled-components";
import { JoinForm, Title } from "./JoinStyled";

export const PageTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin: 0 auto;
`;

export const ImgLabel = styled.label`
  cursor: pointer;
`;

export const ImgUploadBtn = styled.img`
  cursor: pointer;

  position: absolute;
  top: 58%;
  left: 57%;
`;

export const ImgUploader = styled.input`
  display: none;
`;

export const SetProfileForm = styled(JoinForm)`
  margin-top: 10px;
`;

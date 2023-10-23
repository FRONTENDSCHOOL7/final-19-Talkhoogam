import React from "react";
import { PageTitle, ProfileImg } from "../styles/SetProfile";
import profile from "../assets/images/img-profile.png";
import { PageArticle } from "../styles/JoinStyled";

export default function SetProfile() {
  return (
    <PageArticle>
      <PageTitle>프로필 설정</PageTitle>
      <ProfileImg src={profile} />
    </PageArticle>
  );
}

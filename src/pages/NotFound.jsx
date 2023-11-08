import React from "react";
import { LayoutStyle } from "../styles/LayoutStyled";
import Empty from "../components/empty/Empty";
import NotFoundImg from "../assets/images/404.png";

function NotFound() {
  return (
    <>
      <LayoutStyle>
        <h1 className="a11y-hidden">Not Found</h1>
        <Empty image={NotFoundImg} alt={"404페이지"} navigatePath={-1}>
          {/* <p style={{ fontSize: "16px" }}>페이지를 찾을 수 없습니다 :&#40;</p> */}
          페이지를 찾을 수 없습니다 :&#40;
        </Empty>
      </LayoutStyle>
    </>
  );
}

export default NotFound;

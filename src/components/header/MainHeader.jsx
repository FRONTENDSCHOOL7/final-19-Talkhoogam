import React, { useState } from "react";
import { BackBtn, HeaderMain, MenuBtn } from "../../styles/HeaderStyled";

export default function MainHeader({ props }) {
  const [moreOpen, setMoreOpen] = useState(false);
  function goBack(e) {
    e.preventDefault();
    window.history.back();
  }

  function openMore() {
    moreOpen ? setMoreOpen(false) : setMoreOpen(true);
  }

  return (
    <HeaderMain>
      <BackBtn className="btn-goBack" onClick={goBack} />
      {props ? <h2>{props}</h2> : ""}
      <MenuBtn className="btn-openMore" onClick={openMore} />
    </HeaderMain>
  );
}

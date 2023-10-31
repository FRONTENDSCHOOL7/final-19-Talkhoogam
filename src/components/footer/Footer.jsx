import React, { useState } from "react";
import styled from "styled-components";
import PostInsertModal from "../modal/PostInsertModal";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as IconHome } from "../../assets/icons/home.svg";
import { ReactComponent as IconHand } from "../../assets/icons/handshake.svg";
import { ReactComponent as IconEdit } from "../../assets/icons/edit.svg";
import { ReactComponent as IconusersAlt } from "../../assets/icons/users-alt.svg";
import { ReactComponent as IconUser } from "../../assets/icons/user.svg";
import accountname from "../../recoil/accountname";
import { useRecoilValue } from "recoil";

function Footer() {
    const navigate = useNavigate();
    const uselocation = useLocation();
    const [svgColor, setSvgColor] = useState(uselocation.pathname.toLowerCase());
    const [modalOpen, setModalOpen] = useState(false);
    const accountName = useRecoilValue(accountname);

    const showModal = () => {
        modalOpen ? setModalOpen(false) : setModalOpen(true);
    };

    const handleClickState = (pageName) => {
        navigate(`/${pageName}`);
        setSvgColor(pageName);
        // console.log(`페이지 이름 : /${pageName}`);
        if (`/${pageName}` === "/home") {
        setSvgColor(`/${pageName}`);
        } else if (`/${pageName}` === `/profile/${accountName}`) {
        setSvgColor(`/${pageName}`);
        } else if(`/${pageName}` === "/sellbook"){
            setSvgColor(`/${pageName}`)
        } else if(`/${pageName}` === "/gathering"){
            setSvgColor(`/${pageName}`)
        }
    };
    return (
        <>
        <FooterLayout>
            <FooterIconWrap
            onClick={() => {
                handleClickState("home");
            }}
            >
            <IconHome
                className="footer-icon"
                fill={svgColor === "/home" ? "#56b778" : "#979797"}
            />
            <p style={{ color: svgColor === "/home" ? "#56b778" : "#767676" }}>
                홈
            </p>
            </FooterIconWrap>

            <FooterIconWrap
            onClick={() => {
                handleClickState("sellbook");
            }}
            >
            <IconHand
                className="footer-icon"
                fill={svgColor === "/sellbook" ? "#56b778" : "#979797"}
            />
            <p
                style={{ color: svgColor === "/sellbook" ? "#56b778" : "#767676" }}
            >
                거래
            </p>
            </FooterIconWrap>

            <FooterIconWrap onClick={showModal}>
            <IconEdit
                className="footer-icon"
                fill={svgColor === "/productadd" ? "#56b778" : "#979797"}
            />
            <p
                style={{
                color: svgColor === "/productadd" ? "#56b778" : "#767676",
                }}
            >
                게시물 작성
            </p>
            </FooterIconWrap>

            <FooterIconWrap
            onClick={() => {
                handleClickState("gathering");
            }}
            >
            <IconusersAlt
                className="footer-icon"
                fill={svgColor === "/gathering" ? "#56b778" : "#979797"}
            />
            <p
                style={{ color: svgColor === "/gathering" ? "#56b778" : "#767676" }}
            >
                독서모임
            </p>
            </FooterIconWrap>

            <FooterIconWrap
            onClick={() => {
                handleClickState(`profile/${accountName}`);
            }}
            >
            <IconUser
                className="footer-icon"
                fill={svgColor === `/profile/${accountName}` ? "#56b778" : "#979797"}
            />
            <p style={{ color: svgColor === `/profile/${accountName}` ? "#56b778" : "#767676" }}>
                프로필
            </p>
            </FooterIconWrap>

            {modalOpen && (
            <PostInsertModal setModalOpen={setModalOpen}></PostInsertModal>
            )}
        </FooterLayout>
        </>
    );
}

export default Footer;

const FooterLayout = styled.footer`
    border-top: 1px solid #dbdbdb;
    max-width: 390px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    position: fixed;
    bottom: 0;
    background-color: white;
`;

const FooterIconWrap = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    cursor: pointer;
    width: 84px;
    height: 60px;

    & p {
        margin-top: 4px;
        text-align: center;
        font-size: 10px;
        font-family: "Pretendard", sans-serif;
    }

    & .footer-icon {
        width: 22px;
        height: 22px;
    }
`;

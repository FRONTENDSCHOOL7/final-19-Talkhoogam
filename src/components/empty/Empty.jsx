import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import Button from "../common/button/Button";
import { EmptyLayout, LogoImg, EmptyText } from "../../styles/EmptyStyled";

function Empty({image, alt, children, navigatePath}) {
    const navigate = useNavigate();
    const location = useLocation();
    const onClickHandler = () => {
        console.log("페이지 경로 : ",location)
        if(location.pathname === "/home"){
            navigate("/searchPage")
        }else{
            navigate(navigatePath)
        }
        
    }
    return (
    <>
        <EmptyLayout>
            <LogoImg src={image} alt={alt} />
            <EmptyText>{children}</EmptyText>
            <Button onClick={onClickHandler}>이전 페이지</Button>
        </EmptyLayout>
    </>
    )
}

export default Empty

import React, { useState } from 'react'
import IconHeart from "../../assets/icons/heart.svg";
import IconHeartActive from "../../assets/icons/heart-avtive.svg";

export default function LikeHeart() {

    //하트 색칠하기
    const [iconColor, setIconColor] = useState(IconHeart);

    const colorChangeHandler = () => {
        if (iconColor === IconHeart) {
            setIconColor(IconHeartActive);
        } else {
            setIconColor(IconHeart);
        }
    };

    return (
        <img className="social-icon" onClick={colorChangeHandler} src={iconColor} alt="좋아요" />
    )
}

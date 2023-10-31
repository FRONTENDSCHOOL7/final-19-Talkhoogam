import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import styled from "styled-components";
import ImgLayes from "../../assets/icons/icon-img-layers.svg";
import ImgExample from "../../assets/images/슈독.jfif";

export default function LayerFeed(){

    //썸네일 클릭

    return(
        <Layer>
                <div className="feedlayer">
                <div className="content">
                    {" "}
                    {/*피드가 추가될때마다 content div 추가*/}
                    <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                    <img
                    src={ImgLayes}
                    alt="이미지 2장 이상일 경우 나타나는 아이콘"
                    className="bookMultiple"
                    ></img>
                </div>
                <div className="content">
                    <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                    <img
                    src={ImgLayes}
                    alt="이미지 2장 이상일 경우 나타나는 아이콘"
                    className="bookMultiple"
                    ></img>
                </div>
                <div className="content">
                    <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                    <img
                    src={ImgLayes}
                    alt="이미지 2장 이상일 경우 나타나는 아이콘"
                    className="bookMultiple"
                    ></img>
                </div>
                <div className="content">
                    <img src={ImgExample} alt="예시 사진" className="bookImg"></img>
                    <img
                    src={ImgLayes}
                    alt="이미지 2장 이상일 경우 나타나는 아이콘"
                    className="bookMultiple"
                    ></img>
                </div>
                </div>
            </Layer>
    )
}
const Layer = styled.div`
    display: grid; // 재웅 그리드로 바꾸고 도망갑니다
    margin: 16px;
    margin-bottom: 70px;
    .content {
        position: relative;
    }
    .feedlayer  .bookImg { //책표지 api 사이즈 따라서 수정
        width: 108px;
        height: 160px;  
    }
    .feedlayer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }
    .feedlayer  .bookMultiple {
        position: absolute;
        top: 0;
        right: 0;
    }
    .bookImg:hover {
        box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;
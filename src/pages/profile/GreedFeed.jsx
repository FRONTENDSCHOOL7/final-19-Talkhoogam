import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import styled from "styled-components";
import ImgLayes from "../../assets/icons/icon-img-layers.svg";
import MyFeedListAPI from "../../api/post/MyFeedListAPI.jsx";

export default function LayerFeed(accountname){

    const [loading, setLoading] = useState(false);
    const {getMyFeedListAPI} = MyFeedListAPI(accountname);
    const [myFeedData, setMyFeedData] = useState(() => {});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const list = await getMyFeedListAPI();
                setMyFeedData(list);
                setLoading(false);
                
            } catch (error) {
                console.error("데이터 가져오기 오류:", error);
                setLoading(false);
            }
        };
    fetchData();
    }, []);
    console.log('myFeedData : ', myFeedData)
    console.log(accountname.accountname)

    //썸네일 클릭
    const onClickThumbnail = () => {
        alert("구현 X")
    }
    return(
        <Layer>
            {myFeedData ? (
            myFeedData.post.map((item, index) => (
                <div className="feedlayer" key={index}>
                <button className="content" onClick={onClickThumbnail}>
                    {" "}
                    {/*피드가 추가될때마다 content div 추가*/}
                    <img src={item.image} alt="예시 사진" className="bookImg"></img>
                    <img src={ImgLayes} alt="이미지 2장 이상일 경우 나타나는 아이콘" className="bookMultiple"></img>
                </button>
                </div>
            ))) : (
                <p>오류</p>
            )}
            </Layer>
    )
}
const Layer = styled.div`
    display: grid; // 재웅 그리드로 바꾸고 도망갑니다
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 12px;
    margin: 16px;
    margin-bottom: 80px;
    .content {
        position: relative;
        padding: 0;

        & .bookImg{
            width: 100%;
        }
    }
    .feedlayer  .bookImg { //책표지 api 사이즈 따라서 수정
        min-width: 108px;
        min-height: 160px;  
        
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
import React, { useState,useEffect } from 'react'
import styled from "styled-components";
import {LayoutStyle, LayoutInsideStyle} from "../../styles/LayoutStyled";
import BasicHeader from '../../components/header/BasicHeader';
import { useRecoilValue } from 'recoil';
import accountname from '../../recoil/accountname';
import ProductListAPI from '../../api/product/ProductListAPI';
import Footer from '../../components/footer/Footer';
import Empty from '../../components/empty/Empty';
import LogoImg from '../../assets/images/Logo.png';
import { useNavigate } from 'react-router-dom';


export default function ProductList() {
    const newAccountname = useRecoilValue(accountname);
    const { getProductList } = ProductListAPI(newAccountname);
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const list = await getProductList();
                setProductData(list);
                setLoading(false);
                
            } catch (error) {
                console.error("데이터 가져오기 오류:", error);
                setLoading(false);
            }
        };

        fetchData();
        
    }, []);
    console.log(productData)
    return (
        <LayoutStyle>
            <BasicHeader></BasicHeader>
            <LayoutInsideStyle>
                {productData.length > 0 ? (
                <FeedWrap>
                <h1 className='a11y-hidden'>상품 게시물 목록</h1>
                {productData.map((item, index) => (
                    <div key={index} className="user-timeline">
                        <img className="user-profileimg" src={item.author.image} alt="프로필이미지" />
                        <div className="user-contents">
                            <div className="timeline-title-wrap">
                                <p className="timeline-title">{item.itemName}</p>
                                {/* <img className="img-dot" src={item.link} alt="도트이미지" /> */}
                            </div>
                            {/* <p>{item.id}</p> */}
                            <p className="timeline-id">{item.author.username}</p>
                            <p className="timeline-main-text">{item.description}</p>
                            <MoreButton onClick={() => navigate(`/product/detail/${item.id}`) }>
                                <img className="timelin-img" src={item.itemImage} alt="피드이미지" />
                            </MoreButton>
                            
                            <div className="social-wrap">
                                <p className='social-price'>{item.price}원</p>
                                <p className='social-desc'>{item.link}</p>
                                <p>{}</p>
                            </div>
                            <p className="wr-date">{item.createdAt}</p>
                        </div>
                    </div>
                ))}
                </FeedWrap>
            ) : (
                <>
                    <h1 className='a11y-hidden'>팔로우가 존재하지 않습니다.</h1>
                    <Empty image={LogoImg} alt={"404페이지"} >
                    유저를 검색해 팔로우 해보세요!
                    </Empty>
                </>
            )} 
                        
            </LayoutInsideStyle>
            
            <Footer></Footer>
        </LayoutStyle>
    )
}

const MoreButton = styled.div`
    cursor: pointer;
    border: none;
`

export const FeedWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & .symbol-logo {
        margin-top: 220px;
    }

    & .home-text {
        font-size: 14px;
        color: #767676;
        margin: 20px 0;
    }

    /* & button {
        background: #f26e22;
        border-radius: 44px;
        padding: 13px 33px;
        margin-bottom: 294px;
    } */

    & .user-timeline {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 25px;
    }

    .user-profileimg {
        border-radius: 42px;
        width: 42px;
        height: 42px;
    }

    .user-contents {
        width: 304px;
    }

    .timeline-title-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .timeline-title {
        font-size: 14px;
    }

    .timeline-id {
        color: #767676;
        font-size: 12px;
        margin-top: 5px;
    }

    .timeline-main-text {
        font-size: 14px;
        line-height: normal;
        margin: 16px 0;
    }

    .timelin-img {
        width: 304px;
        height: 228px;
        border-radius: 10px;
    }

    .social-wrap {
        /* display: flex;
        align-items: center; */

        font-size: 12px;
        color: #767676;
        gap: 16px;
        margin-top: 12px;
        & .social-price{
            color: #F26E22;
            font-size: 12px;
            margin-bottom: 10px;
        }
        & .social-desc{
            color: #000;
            font-size: 14px;
            font-weight: 400;
        }
    }

    /* .social-wrap img {
        width: 22px;
        height: 22px;
    } */
    /* .social-wrap div {
        display: flex;
        align-items: center;
        justify-content: center;
    } */

    .social-wrap div::after {
        margin-left: 6px;
        content: "55";
    }

    .wr-date {
        color: #767676;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        margin-top: 16px;
    }
    `;

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
import { useLocation, useNavigate } from 'react-router-dom';
import timeFormat from '../../utils/timeFormat';


export default function ProductList() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search); // URL 쿼리 문자열을 가져옵니다.
    const data = queryParams.get('data'); // 'data' 파라미터 값을 가져옵니다.
    
    const loginAccountname = useRecoilValue(accountname);
    const { getProductList } = ProductListAPI(data);
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
                <ProductListWrap>
                <h1 className='a11y-hidden'>상품 게시물 목록</h1>
                {productData.map((item, index) => (
                    <div key={index} className="product-list-wrap">
                        <MoreButton onClick={() => navigate(`/product/detail/${item.id}`) }>
                            <div className='product-img-wrap'>
                                <img className="product-img" src={item.itemImage} alt="피드이미지" />
                            </div>
                            <div className="product-desc-wrap">
                                <p className="product-name">{item.itemName}</p>
                                <p className="product-price">{Intl.NumberFormat().format(item.price)}원</p>
                                <p className='product-desc'>{item.link}</p>
                            </div>
                            <div className='create-wrap'>
                                <p className='create'>{timeFormat(item.createdAt)}</p>
                            </div>
                        </MoreButton>
                    </div>
                ))}
                </ProductListWrap>
            ) : (
                <>
                    <h1 className='a11y-hidden'>판매하는 상품이 존재하지 않습니다.</h1>
                    {loginAccountname === data ? (
                    <Empty image={LogoImg} alt={"404페이지"} isMine={true} >
                    상품을 등록해서 중고 서적을 판매해 보세요!
                    </Empty>
                    ) : (
                        <>
                            <Empty image={LogoImg} alt={"404페이지"} isMine={false}>
                                해당 사용자의 판매 서적이 아직 작성되지 않았습니다.
                            </Empty>
                        </>
                    )}
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
    display: flex;
    margin: 10px 0;

    .product-img{
        width: 130px;
        height: 130px;
        border-radius: 10px;
        object-fit: cover;
    }
    
    .product-desc-wrap{
        width: 100%;
        margin-left: 10px;
        p{
            margin-bottom: 5px;
        }
    }
    
    .product-price{
        color: var(--color-mainColor);
        font-weight: bold;
    }

    .product-desc{
        font-size: 12px;
        color: var(--color-darkgrey);
        display: -webkit-box; /* 웹킷 브라우저용 박스 모델 설정 */
        -webkit-box-orient: vertical; /* 웹킷 브라우저용 박스 방향 설정 */
        overflow: hidden; /* 넘치는 내용을 감추기 위한 설정 */
        text-overflow: ellipsis; /* 넘치는 텍스트를 ...으로 표시하는 설정 */
        -webkit-line-clamp: 3; /* 표시할 줄 수 설정 */
        max-height: 3.6em; /* 3줄에 대한 높이 설정 (1.2em/줄) */
    }


    .create-wrap{
        display: flex;
        align-items: end;
        color: #767676;
        font-size: 10px;
        line-height: 12px; /* 120% */
        width: 68px;
    }

    .create{
        font-size: 10px;
    }

    `

export const ProductListWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .product-list-wrap{
        width: 100%;
        border-bottom: 1px solid #dbdbdb;
    }
`;

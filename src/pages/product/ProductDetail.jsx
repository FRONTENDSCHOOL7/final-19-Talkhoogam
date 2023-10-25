import React, { useEffect, useState } from 'react'
import {LayoutStyle, LayoutInsideStyle} from "../../styles/LayoutStyled";
import { useParams } from 'react-router-dom';
import ProductDetailAPI from '../../api/product/ProductDetailAPI';
import BasicHeader from '../../components/header/BasicHeader';
import styled from 'styled-components';

export default function ProductDetail() {

    const params = useParams();
    const getProductDetail = ProductDetailAPI(params.id);
    const [productDetail, setProductDetail] = useState(() => {});

    useEffect(() => {
        const detailList = async () => {
            const list = await getProductDetail();
            // console.log(list);
            setProductDetail(list.product);
        };
        detailList();
    }, [getProductDetail])
    console.log(productDetail)
    return (
        <LayoutStyle>
            <BasicHeader></BasicHeader>
            <LayoutInsideStyle>
                {productDetail ? (
                <ProductDetailWrap>
                    <div className='product-img-wrap'>
                        <img className="product-img" src={productDetail.itemImage} alt="피드이미지" />
                    </div>
                    <div className='product-title-wrap'>
                        <p className='product-sell-text'>판매</p>
                        <p className="product-title">{productDetail.itemName}</p>
                    </div>
                    
                    <div className='product-price-wrap'>
                        <p className='product-price'>{productDetail.price}원</p>
                        <p className="wr-date">{productDetail.updatedAt}</p>
                    </div>

                    <div className='profile-wrap'>
                        <img className="user-profile-img" src={productDetail.author.image} alt="프로필이미지" />
                        <p className="user-profile-name">{productDetail.author.username}</p>
                    </div>
                    
                    <div className="product-desc-wrap">
                        <p>{productDetail.link}</p>
                    </div>
                </ProductDetailWrap>
                )
                : (
                    <p>Loading..</p>
                ) }
            </LayoutInsideStyle>
        </LayoutStyle>
    )
}

export const ProductDetailWrap = styled.div`
    
    .product-img-wrap{
        width: 358px;
        height: 350px;
    }
    .product-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px 15px 0 0 ;
    }

    .profile-wrap{
        width: 42px;
        height: 42px;
    }

    .product-title-wrap{
        display: flex;
        gap: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    .product-sell-text{
        color: #F26E22;
    }

    .product-price-wrap{
        margin-bottom: 10px;
    }

    .product-price{
        margin-bottom: 10px;
    }

    .wr-date{
        color: #767676;
        font-size: 12px;
        line-height: 12px; /* 120% */
    }

    .profile-wrap{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin-bottom: 10px;
        gap: 10px;
    }

    .user-profile-img{
        width: 42px;
        height: 42px;
        border-radius: 42px;
    }
    
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LayoutStyle, LayoutInsideStyle } from "../../styles/LayoutStyled";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailAPI from "../../api/product/ProductDetailAPI";
import BasicHeader from "../../components/header/BasicHeader";
import IconDot from "../../assets/icons/s-icon-more-vertical.svg";
import CommonModal from "../../components/modal/CommonModal";
import { useRecoilValue } from "recoil";
import newAaccountname from "../../recoil/accountname";
import timeFormat from "../../utils/timeFormat";

export default function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const getProductDetail = ProductDetailAPI(params.id);
  const [productDetail, setProductDetail] = useState(() => {});
  const accountname = useRecoilValue(newAaccountname);
  const [modalOpen, setModalOpen] = useState(false);
  const isMine = productDetail
    ? productDetail.author.accountname === accountname
      ? true
      : false
    : false;

  const showModal = () => {
    modalOpen ? setModalOpen(false) : setModalOpen(true);
  };

  useEffect(() => {
    const detailList = async () => {
      const list = await getProductDetail();

      setProductDetail(list.product);
    };
    detailList();
  }, [getProductDetail]);
  // console.log(productDetail)

  function onClickProfile(id) {
    navigate(`/profile/${id}`);
  }
  return (
    <LayoutStyle>
      <BasicHeader></BasicHeader>
      <LayoutInsideStyle>
        {productDetail ? (
          <ProductDetailWrap>
            <div className="product-img-wrap">
              <img
                className="product-img"
                src={productDetail.itemImage}
                alt="피드이미지"
              />
            </div>
            <div className="product-title-wrap">
              <p className="product-sell-text">판매</p>
              <p className="product-title">{productDetail.itemName}</p>
            </div>

            <div className="product-price-wrap">
              <p className="product-price">
                {Intl.NumberFormat().format(productDetail.price)}원
              </p>
              <div className="setting-wrap">
                <p className="wr-date">{timeFormat(productDetail.updatedAt)}</p>
                <img
                  className="img-dot"
                  src={IconDot}
                  alt="도트이미지"
                  onClick={showModal}
                />
              </div>
            </div>

            <div className="profile-wrap">
              <img
                className="user-profile-img"
                onClick={() => {
                  onClickProfile(productDetail.author.accountname);
                }}
                src={productDetail.author.image}
                alt="프로필이미지"
              />
              <p className="user-profile-name">
                {productDetail.author.username}
              </p>
            </div>

            <div className="product-desc-wrap">
              <p>{productDetail.link}</p>
            </div>
          </ProductDetailWrap>
        ) : (
          <p>Loading..</p>
        )}
      </LayoutInsideStyle>
      {modalOpen && (
        <CommonModal
          isMine={isMine}
          setModalOpen={setModalOpen}
          id={params.id}
          isLocation={"product"}
        ></CommonModal>
      )}
    </LayoutStyle>
  );
}

export const ProductDetailWrap = styled.div`
  .product-img-wrap {
    width: 358px;
    height: 350px;
  }
  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px 15px 0 0;
  }

  .profile-wrap {
    width: 42px;
    height: 42px;
  }

  .product-title-wrap {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .product-sell-text {
    color: #f26e22;
  }

  .product-price {
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--color-mainColor);
  }

  .product-price-wrap {
    margin-bottom: 10px;
  }

  .setting-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .img-dot {
    cursor: pointer;
  }

  .wr-date {
    color: #767676;
    font-size: 12px;
    line-height: 12px; /* 120% */
  }

  .profile-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 10px;
    gap: 10px;
  }

  .user-profile-img {
    width: 42px;
    height: 42px;
    border-radius: 42px;
    cursor: pointer;
  }

  .product-desc-wrap p {
    white-space: pre-line;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2em;
  }
`;

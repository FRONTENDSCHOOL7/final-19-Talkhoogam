import React from 'react';
import { MyProductLi } from '../../styles/MyProductStyled';
import { useNavigate } from 'react-router-dom';

export default function MyProductItems({ item }) {
  const navigate = useNavigate();

  function btnClicked() {
    navigate(`/product/detail/${item.id}`);
  }

  return (
    <>
      <MyProductLi>
        <button onClick={btnClicked}>
          <img
            className="img-my-product"
            src={item.itemImage}
            alt="게시글 이미지"
          />
          <strong className="product-tit">{item.itemName}</strong>
          <p className="product-price">
            {Intl.NumberFormat().format(item.price)}원
          </p>
        </button>
      </MyProductLi>
    </>
  );
}

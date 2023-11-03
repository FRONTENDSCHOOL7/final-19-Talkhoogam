import React, { useEffect, useRef, useState } from 'react';
import ProductListAPI from '../../api/product/ProductListAPI';
import MyProductItems from './MyProductItems';
import {
  MyProductLi,
  MyProductUl,
  MyProductWrap,
  ScrollHandler,
} from '../../styles/MyProductStyled';
import { useNavigate, useParams } from 'react-router-dom';
import arrowLeft from '../../assets/icons/icon-arrow-white.svg';
import arrowRight from '../../assets/icons/icon-arrow-right.svg';
import pageMoveIcon from "../../assets/icons/sign-in-alt.svg";

export default function MyProduct() {
  const navigate = useNavigate();
  // 유저 정보 가지고오기
  const params = useParams();
  const accountName = params.accountname;
  const [productList, setProductList] = useState([]);
  const { getProductList } = ProductListAPI(accountName);
  // 게시물 API 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductList();
        setProductList(data);
      } catch (error) {
        console.error('데이터를 불러오는데 실패하였습니다.', error);
      }
    };
    fetchData();
  }, [params.accountname]);
  // console.log('productList : ', productList);

  // 스크롤 핸들러
  const productListRef = useRef(null);
  const btnLeftRef = useRef(null);
  const btnRightRef = useRef(null);
  function scrollLeft() {
    productListRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }
  function scrollRight() {
    productListRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  const handleClick = () => {
    // 쿼리 문자열을 사용하여 데이터 전달
    navigate(`/sellbook?data=${params.accountname}`); 
  };

  return (
    <>
      <MyProductWrap>
        <div className="sub-title-wrap">
          <h3 className="sub-title">판매중인 상품</h3>
          <img onClick={handleClick} src={pageMoveIcon} alt="판매목록보기아이콘" />
        </div>
        {/* <h3 className="sub-title">판매중인 상품</h3> */}
        {productList.length !== 0 ? (
          <div className="product-ul-wrap">
            <MyProductUl ref={productListRef}>
              {productList.map((item) => {
                return (
                  <MyProductItems item={item} key={'myproduct' + item.id} />
                );
              })}
            </MyProductUl>
            {productList.length >= 3 && (
              <>
                <ScrollHandler
                  className="left"
                  ref={btnLeftRef}
                  onClick={scrollLeft}
                >
                  <img src={arrowLeft} alt="왼쪽 스크롤하기" />
                </ScrollHandler>
                <ScrollHandler
                  className="right"
                  ref={btnRightRef}
                  onClick={scrollRight}
                >
                  <img src={arrowRight} alt="오른쪽으로 스크롤하기" />
                </ScrollHandler>
              </>
            )}
          </div>
        ) : (
          <strong className="error-list">현재 판매중인 상품이 없습니다.</strong>
        )}
      </MyProductWrap>
    </>
  );
}

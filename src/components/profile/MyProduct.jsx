import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ProductListAPI from '../../api/product/ProductListAPI';
import accountname from '../../recoil/accountname';
import MyProductItems from './MyProductItems';
import { MyProductUl, MyProductWrap } from '../../styles/MyProductStyled';

export default function MyProduct() {
  const accountName = useRecoilValue(accountname);
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const { getProductList } = ProductListAPI(accountName);

  // 게시물 API 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getProductList();
        setProductList(data);
        setLoading(false);
      } catch (error) {
        console.error('데이터를 불러오는데 실패하였습니다.', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MyProductWrap>
        <h3 className="sub-title">판매중인 상품</h3>
        {productList.length !== 0 ? (
          <MyProductUl>
            {productList.map((item) => {
              return <MyProductItems item={item} key={'myproduct' + item.id} />;
            })}
          </MyProductUl>
        ) : (
          <strong className="error-list">현재 판매중인 상품이 없습니다.</strong>
        )}
      </MyProductWrap>
    </>
  );
}

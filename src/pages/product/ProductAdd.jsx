import React, { useState } from 'react';
import styled from 'styled-components';
import { LayoutStyle, LayoutInsideStyle} from "../../styles/LayoutStyled";
import UploadHeader from '../../components/header/UploadHeader';
import Input from '../../components/common/input/Input';
import {LabelStyle} from "../../styles/InputStyled";
import defaultImg from '../../assets/images/addproduct.png'
import addproductIcon from '../../assets/icons/addproduct-icon.svg'
import ImageUploadAPI from '../../api/upload/ImageUploadAPI';
import { validateImage } from '../../utils/imageValidate';
import ProductUploadAPI from '../../api/product/ProductUploadAPI';


export default function ProductAdd() {

    const [imgSrc, setImgSrc] = useState(defaultImg)
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");
    const [itemImage, setItemImage] = useState("");
    
    const productUpload = ProductUploadAPI({productName, price, link, itemImage});
    const onClickHandler = async (e) => {
        e.preventDefault();
        await productUpload();
        alert("상품 등록 완료!")
    }

    const handleChangeImage = async (e)=>{
        // 파일 가져오기
        const file = e.target.files[0];

        if(!file){
            console.log("파일 선택이 취소 되었습니다.");
            return null;
        }
        if(file.size > 10 * 1024 * 1024){
            console.log("이미지 용량은 10MB를 넘을 수 없습니다.");
            return null;
        }

        if(!validateImage(file.name)){
            console.log("파일 확장자를 확인해 주세요.")
            return null;
        }

        const imageURL = await ImageUploadAPI(file);

         // 이미지 최적화 및 크기 조정
        // const resizeImageURL = await optimizeAndResizeImage(file, 800, 600); // 원하는 크기로 조정
        // setImgSrc(imageURL)
        setImgSrc(imageURL)
        setItemImage(imageURL);
    }
    
    /*
    * 이미지 최적화 및 크기 조정 함수 대략 !! 대략 2초 빨라지지만 upload시 전달 값이 수정되어 확인 필요
    * 
    */
    // const optimizeAndResizeImage = async (file, maxWidth, maxHeight) => {
    // return new Promise((resolve) => {
    //     const img = new Image();
    //     img.onload = () => {
    //     const canvas = document.createElement('canvas');
    //     const ctx = canvas.getContext('2d');

    //     let width = img.width;
    //     let height = img.height;

    //     if (width > maxWidth || height > maxHeight) {
    //         const ratio = Math.min(maxWidth / width, maxHeight / height);
    //         width *= ratio;
    //         height *= ratio;
    //     }

    //     canvas.width = width;
    //     canvas.height = height;

    //     ctx.drawImage(img, 0, 0, width, height);

    //     canvas.toBlob((blob) => {
    //         resolve(URL.createObjectURL(blob));
    //     }, 'image/jpeg', 0.8); // 이미지 포맷 및 품질 조정 가능
    //     };

    //     img.src = URL.createObjectURL(file);
    // });
    // };

    

    return (
    <LayoutStyle>
        <h1 className='a11y-hidden'>상품 등록 페이지</h1>
        <UploadHeader onClickHandler={onClickHandler}>저장</UploadHeader>
        <ReLayoutInsideStyle>
            <main>
                <form>
                    <LabelStyle htmlFor='file-upload'>이미지 등록
                        <ProductImgWrap>
                            <img className='addproduct-img' src={imgSrc || defaultImg} alt="상품 이미지" />
                            <img className='inside-icon' src={addproductIcon} alt="상품 이미지 아이콘" />
                        </ProductImgWrap>
                    </LabelStyle>
                    <input id='file-upload' onChange={handleChangeImage} type="file" accept="image/*" style={{display:"none"}} />
                    <Input 
                        labelText="상품명"
                        maxLength={15}
                        placeholder={"2~15자 이내여야 합니다."}
                        onChangeHandler={(event) => {
                            if(event.target.value.length > 1 && event.target.value.length < 16 ){
                                setProductName(event.target.value);
                            }
                        }}
                    />
                    <Input 
                        labelText="가격"
                        maxLength={15}
                        placeholder={"숫자만 입력 가능합니다."}
                        onChangeHandler={(event) => {
                            setPrice(event.target.value);
                        }}
                    />
                    <Input 
                        labelText="판매 링크"
                        // maxLength={15}
                        placeholder={"URL을 입력해 주세요."}    
                        onChangeHandler={(event) => {
                            setLink(event.target.value);
                        }}
                    />
                </form>
            </main>
        </ReLayoutInsideStyle>
    </LayoutStyle>
    )
}

const ReLayoutInsideStyle = styled(LayoutInsideStyle)`
    padding: 30px 34px 25px 34px;

    
`

const ProductImgWrap = styled.div`
    max-width: 322px;
    cursor: pointer;
    position: relative;
    margin-top: 18px;
    margin-bottom: 30px;
    & .addproduct-img{
        width: 322px;
        height: 204px;
        object-fit: cover;
    }

    & .inside-icon{
        position: absolute;
        bottom: 12px;
        right: 12px;
        display: inline-block;
        
    }
`
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { LayoutStyle, LayoutInsideStyle } from '../../styles/LayoutStyled';
import UploadHeader from '../../components/header/UploadHeader';
import PostModifyAPI from '../../api/post/PostModifyAPI';
import ImageUploadAPI from '../../api/upload/ImageUploadAPI';
import IconUpload from "../../assets/icons/icon-upload.svg";
import { validateImage } from '../../utils/imageValidate';
import PostDetailAPI from '../../api/post/PostDetailAPI';
import { useParams } from 'react-router-dom';

export default function PostModify() {

    const [postDetail, setPostDetail] = useState(() => {});
    const params = useParams();
    const id = params.id;
    const getPostDetail = PostDetailAPI(params.id)
    const [imgSrc, setImgSrc] = useState("")
    const [itemImage, setItemImage] = useState("");
    const textareaRef = useRef();

    const hendleResizeHeight = () => {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
    const {postModify} = PostModifyAPI(postDetail, itemImage, id)
    const onClickHandler = async (e) => {
        e.preventDefault();
        await postModify();
    
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

        setImgSrc(imageURL);
        setItemImage(imageURL);
    }

    useEffect(() => {
    const detailList = async () => {
        try {
            const list = await getPostDetail();
            setPostDetail(list.post);
        } catch (error) {
            console.error("API 호출 중 오류 발생", error);
        }
        }
        detailList();
    }, []);

    // console.log(postDetail)
    return (
        <LayoutStyle>
            <h1 className='a11y-hidden'>피드 수정 페이지</h1>
            <UploadHeader onClickHandler={onClickHandler}>저장</UploadHeader>
            <LayoutInsideStyle>
                <PositionWrap>
                <ContentWrap>
                    {
                    postDetail ? (
                        <>
                        <img className='profile-img' src={postDetail.author.image} alt="프로필이미지" />
                        <InputWrap>
                        <img src={imgSrc ? imgSrc : postDetail.image} alt="업로드 이미지" />
                        
                        <TextArea 
                            placeholder="책 후기를 남겨주세요."
                            ref={textareaRef}
                            onChange={(event) => {
                            hendleResizeHeight();
                            setPostDetail({
                                ...postDetail, content: event.target.value
                            });
                            }}
                            value={postDetail.content}
                        />
                        </InputWrap>
                        </>  
                    ) : (
                        <p>로딩 중 ..</p>
                    )
                    }
                </ContentWrap>
                
                <UploadButton>
                    <label htmlFor="file-upload">
                    <img src={IconUpload} alt="이미지 업로드 아이콘" />
                    </label>
                    <input id="file-upload" onChange={handleChangeImage} type="file" accept="image/*" style={{display:"none"}} />
                </UploadButton>
                </PositionWrap>
            </LayoutInsideStyle>
        </LayoutStyle>
    )
}

const PositionWrap = styled.div`
    position: relative;
    min-height: 500px;
    `

    const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;

    /* position: relative; */
    .profile-img{
        width: 42px;
        height: 42px;
        border-radius: 42px;
        object-fit: cover;
    }
    `

    const InputWrap = styled.div`
    width: 304px;

    img{
        width: 304px;
        height: 228px;
        border-radius: 10px;
        object-fit: contain;
        margin-bottom: 16px;
    }
    `

    const TextArea = styled.textarea`
    width: 100%;
    border: none;
    resize: none;

    &:focus{
        outline: none;
    }
    `

    const UploadButton = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    img{
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`
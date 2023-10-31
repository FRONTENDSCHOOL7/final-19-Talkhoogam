import React, { useState, useEffect } from 'react'
import { ModalLayout, ModalHeader, ModalInsideLayout, ModalButton } from '../../styles/ModalStyled';
import {
    ModalLogoutStyled,
} from '../../styles/HeaderStyled';
import { useNavigate } from 'react-router-dom';
import IconClose from "../../assets/icons/icon-delete.svg";
import styled from 'styled-components';
import ProductDeleteAPI from '../../api/product/ProductDeleteAPI';
import PostDeleteAPI from '../../api/post/PostDeleteAPI';

function ShowDeleteModal({setShowModal, isLocation, id}){

    const [isVisible, setIsVisible] = useState(false);
    const {productDelete} = ProductDeleteAPI(id);
    const {postDelete} = PostDeleteAPI(id);
    // 스크롤 잠금
    const scrollLock = () => {
        document.body.style.overflow = 'hidden';
    };

    // 스크롤 잠금 해제
    const scrollUnlock = () => {
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        scrollLock();
        setIsVisible(true);
        return () => scrollUnlock();
    }, []);

    const deleteHandler = async (e) => {
        e.preventDefault();
        if(isLocation === "product"){
            await productDelete();
        }else if(isLocation === "post"){
            await postDelete();
        }

    }

    return(
        <>
        <ReModalLogoutStyled className={isVisible ? 'appear' : ""}>
            <strong className="question">상품을 삭제 하시겠습니까?</strong>
            <div className="btn-group">
            <button
                onClick={() => {
                    setShowModal(false);
                }}
                >
                취소
                </button>
                <button onClick={deleteHandler}>확인</button>
            </div>
        </ReModalLogoutStyled>
        </>
    )
}


export default function CommonModal({isMine, setModalOpen , onClick , id , isLocation , ...props}) {

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    
    const closeModal = () => {
        setModalOpen(false);
    }

    const onClickHandler = () => {
        if(isLocation === "post"){
            navigate(`/postmodify/${id}`);
        }else if(isLocation === "product"){
            navigate(`/productmodify/${id}`)
        }
    }

    const showDeleteHandler = () => {
        setShowModal(true);
    }
    
    return (
        <>
        <ModalLayout >
            <ModalHeader onClick={closeModal}>
                <div className='separator' ></div>
                <img src={IconClose} alt="닫기 아이콘" />
            </ModalHeader>
            
            <ModalInsideLayout >
                {isMine ? (
                    <>
                    <ModalButton onClick={showDeleteHandler}>삭제</ModalButton>
                    <ModalButton onClick={onClickHandler}>수정</ModalButton>
                    </>
                ) : (
                    <ModalButton>신고하기</ModalButton>
                )}
            </ModalInsideLayout>
        </ModalLayout>
        {showModal && <ShowDeleteModal setShowModal={setShowModal} isLocation={isLocation} id={id}></ShowDeleteModal>}
        </>
    )
}

const ReModalLogoutStyled = styled(ModalLogoutStyled)`
    opacity: 0; /* 처음에 숨김 */
    transition: opacity 0.2s ease-in-out; /* 2초 동안 부드럽게 변화하도록 설정 */

    &.appear {
        opacity: 1;
    }
`



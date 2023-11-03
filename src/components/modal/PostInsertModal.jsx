import React from 'react'
import { ModalLayout, ModalHeader, ModalInsideLayout, ModalButton } from '../../styles/ModalStyled'
import IconClose from "../../assets/icons/icon-delete.svg"
import { useNavigate } from 'react-router-dom'

export default function PostInsertModal({setModalOpen}) {

    const navigate = useNavigate();

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
        <ModalLayout >
            <ModalHeader onClick={closeModal}>
                <div className='separator' ></div>
                <img src={IconClose} alt="닫기 아이콘" />
            </ModalHeader>
            
            <ModalInsideLayout >
                <ModalButton onClick={() => {navigate(`/postupload`)}}>피드 등록</ModalButton>
                <ModalButton onClick={() => {navigate(`/productadd`)}}>상품 등록</ModalButton>
            </ModalInsideLayout>
        </ModalLayout>
        </>
    )
}

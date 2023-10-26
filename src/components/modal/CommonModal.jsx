import React from 'react'
import { ModalLayout, ModalHeader, ModalInsideLayout, ModalButton } from '../../styles/ModalStyled'
import { useNavigate } from 'react-router-dom';

export default function CommonModal({isMine, setModalOpen , onClick , id , ...props}) {

    const navigate = useNavigate();

    const closeModal = () => {
        setModalOpen(false);
    }
    
    return (
        <>
        <ModalLayout >
            <ModalHeader onClick={closeModal}>
                <div className='separator' ></div>
            </ModalHeader>
            
            <ModalInsideLayout >
                {isMine ? (
                    <>
                    <ModalButton>삭제</ModalButton>
                    <ModalButton onClick={() => {navigate(`/productmodify/${id}`)}}>수정</ModalButton>
                    </>
                ) : (
                    <ModalButton>신고하기</ModalButton>
                )}
            </ModalInsideLayout>
        </ModalLayout>
        </>
    )
}

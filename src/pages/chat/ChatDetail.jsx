import React, { useState } from 'react'
import chatData from "../../assets/chat/chatData.json";
import { useParams } from 'react-router-dom';
import {LayoutStyle, LayoutInsideStyle} from "../../styles/LayoutStyled";
import { ChatStyle, MyChatStyle} from "../../styles/ChatStyled";
import BasicHeader from '../../components/header/BasicHeader';
import profileImg from "../../assets/images/img-profile.png";
import { CommentForm, CommentInputStyle } from '../../styles/CommentStyled';
import addproductIcon from '../../assets/icons/addproduct-icon.svg'


export default function ChatDetail() {

    const params = useParams()
    const findName = chatData[chatData.findIndex(item => item.accountname === params.name)] || ""

    const [comment, setComment] = useState('');
    
    // 입력 이벤트 핸들러
    const handleCommentChange = (event) => {
        const inputValue = event.target.value;
        setComment(inputValue);
    };
    
    return (
        <LayoutStyle>
            <BasicHeader></BasicHeader>
            <LayoutInsideStyle>
                {findName.messages.map((item, index) =>{
                    return (
                        !!item.receive ?(
                        <ChatStyle key={index}>
                            <img className='profile-img' src={profileImg} alt="프로필이미지" />
                            <p className='text'>{item.Msg}</p>
                            <span className='time'>{`${item.createdAt.split(" ")[3]} ${item.createdAt.split(" ")[4]}`}</span>
                        </ChatStyle>
                        ) : (
                        <MyChatStyle key={index}>
                            <span className='time'>{`${item.createdAt.split(" ")[3]} ${item.createdAt.split(" ")[4]}`}</span>
                            {!!item.Img || <p className='text'>{item.Msg}</p>}
                            {item.Img && <img src={item.Img} alt='' />}
                        </MyChatStyle>
                        )
                    )
                })}
            </LayoutInsideStyle>
            <CommentForm>
                <img className="profile-img" src={addproductIcon} alt="프로필이미지" />
                <label className='a11y-hidden' htmlFor="commentId">댓글 입력</label>
                <CommentInputStyle
                    id="commentId"
                    type="text" 
                    placeholder="메시지 입력하기..."
                    onChange={handleCommentChange} // 입력 이벤트 핸들러
                    value={comment} // 입력된 값
                />
                <button className="commnt-btn" disabled={comment.length === 0}>전송</button>
            </CommentForm>
        </LayoutStyle>
    )
}

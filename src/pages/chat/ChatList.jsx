import React from 'react'
import {LayoutStyle, LayoutInsideStyle} from "../../styles/LayoutStyled";
import {ChatListWrap} from "../../styles/ChatStyled";

import BasicHeader from '../../components/header/BasicHeader';
import Footer from '../../components/footer/Footer';
import chatData from "../../assets/chat/chatData.json";
import profileImg from "../../assets/images/img-profile.png";
import { useNavigate } from 'react-router-dom';

export default function ChatList() {

    const navigate = useNavigate();
    console.log(chatData);
    return (
        <LayoutStyle>
            <BasicHeader></BasicHeader>
            <LayoutInsideStyle>
                {chatData.map((item, index) => {
                    const lastMessageCreatedAt = item.messages[item.messages.length - 1].createdAt.split(" ");
                    return (
                        <ChatListWrap key={index} onClick={() => {navigate(`/chat/${item.accountname}`)}}>
                            <img className='profile-img' src={profileImg} alt="프로필이미지" />
                            {index === 0 && 
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="6" fill="#56b778"/>
                            </svg>}
                            <div className='info-wrap'>
                                <p className='profile-id'>{item.name}</p>
                                <div className='desc-wrap'>
                                    <p className='desc-text'>
                                        {item.messages.slice().reverse().find(message => message.Msg !== undefined).Msg}
                                    </p>
                                    <span className='desc-date'>{`${lastMessageCreatedAt[0]}${lastMessageCreatedAt[1]}${lastMessageCreatedAt[2]}`}</span>
                                </div>
                            </div>
                        </ChatListWrap>
                    )
                })}
            </LayoutInsideStyle>
            <Footer></Footer>
        </LayoutStyle>
    )
}

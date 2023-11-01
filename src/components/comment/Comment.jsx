import React, { useEffect, useState } from 'react'
import { CommentLayout } from '../../styles/CommentStyled';
import CommentListAPI from "../../api/comment/CommentListAPI";
import IconDot from "../../assets/icons/s-icon-more-vertical.svg";
import timeGapCalculator from "../../utils/timeGapCalculator";

export default function Comment({postId, createName, idState, isLocation, showModalInComment }) {

    const getCommentList = CommentListAPI(postId);
    const [comments, setComments] = useState([]);
    // const [modalOpen, setModalOpen ] = useState(false);

    useEffect(() => {
        const dataList = async () => {
            const list = await getCommentList();
            setComments(list.comments);
        };
        dataList();
    }, [comments, setComments]);

    const showModal = (id, name, location) => {
        idState(id)
        createName(name);
        isLocation(location)
        showModalInComment(id, name, location)
    }
    
    return (
        <CommentLayout>
        {
            comments ? (
            <div className="info-wrap">
            {comments.map((item) => (
            <div key={item.id} className="comment">
                <img className="profile-img" src={item.author.image} alt={"프로필 이미지"} />
                <div className="comment-info">
                    <div className='id-wrap'>
                        <div>
                            <p className="username">{item.author.username}</p>
                            <p className='createdAt'>{timeGapCalculator(item.createdAt)}</p>
                        </div>
                        <img src={IconDot} alt="더보기아이콘" onClick={() => {
                            showModal(item.id, item.author.accountname, "comment");
                        }}/>
                    </div>
                    <p className='comment-text'>{item.content}</p>
                </div>
            </div>
            ))}
            </div>
            ) : (
                <p>로딩중</p>
            )
        }
        </CommentLayout>
    )
}

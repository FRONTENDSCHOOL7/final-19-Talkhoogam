import React, { useEffect, useState } from 'react'
import { CommentForm, CommentInputStyle } from '../../styles/CommentStyled'
import AccountNameProfileAPI from '../../api/post/AcountNameProfileAPI'
import { useRecoilValue } from 'recoil';
import accountname from '../../recoil/accountname';
import CommentUploadAPI from '../../api/comment/CommentUploadAPI';

export function CommentInput({id}) {

    const accountName = useRecoilValue(accountname);
    const {getAccountNameProfile} = AccountNameProfileAPI(accountName);
    const [loginProfile, setLoginProfile] = useState([]);
    const [commentText, setCommentText] = useState(''); // 사용자 입력을 저장할 상태
    
    useEffect(() =>{
        const info = async () => {
            const data = await getAccountNameProfile();
            setLoginProfile(data.profile)
        };
        info();
    }, [])
    
    // 입력값이 변경될 때 호출되는 함수
    const handleInputChange = (e) => {
        setCommentText(e.target.value); // 사용자 입력을 상태에 업데이트
    };
    
    const {commentUpload} = CommentUploadAPI(id, commentText);
    // 댓글 게시 버튼 클릭 시 호출되는 함수
    const handleCommentUpload = async (e) => {
        e.preventDefault();
        setCommentText(''); // 입력값 초기화
        if (commentText.trim() !== '') { // 입력값이 공백이 아닌 경우에만 게시
            await commentUpload(); // CommentUploadAPI로 입력값 전달
        }
    };

    return (
        <CommentForm>
            <img className="profile-img" src={loginProfile && loginProfile.image} alt="프로필이미지" />
            <label className='a11y-hidden' htmlFor="commentId">댓글 입력</label>
            <CommentInputStyle
                id="commentId"
                type="text" 
                placeholder="댓글 입력하기..."
                onChange={handleInputChange}
                value={commentText}
            />
            <button className="commnt-btn" onClick={handleCommentUpload}>게시</button>
        </CommentForm>
    )
}

export default CommentInput;

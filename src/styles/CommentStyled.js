import styled from "styled-components";

export const CommentLayout = styled.section`
    border-top: 1px solid var(--color-lightgrey);
    width: 358px;
    padding: 20px 0 16px 0;

    .info-wrap{
    }
    .comment{
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 16px;
    }

    .profile-img{
        width: 36px;
        height: 36px;
        border-radius: 36px;
    }

    .comment-info{
        width: 100%;
    }

    .id-wrap{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;

        img{
            cursor: pointer;
        }
        
        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .username{
            color: #000;
            font-size: 14px;
            font-weight: 500;
            margin-right: 6px;
        }

    }

    .createdAt{
        color: var(--color-darkgrey);
        font-size: 10px;
        font-weight: 400;
    }

    .comment-content{
        width: 100%;
    }

    .comment-text{
        color: "#333";
        font-size: 14px;
        font-weight: 400;
        margin-top: 16px;
    }
`

export const CommentForm = styled.form`
    width: 390px;
    height: 60px;
    background-color: white;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    border-top: 1px solid var(--color-lightgrey);
    /* justify-content: space-between; */
    gap: 15px;
    color: var(--color-maingrey);
    font-size: 14px;
    font-weight: 400;

    .profile-img{
        width: 36px;
        height: 36px;
        border-radius: 36px;
        margin-left: 16px;
    }

    .commnt-btn{
        width: 55px;
        height: 40px;
        margin-right: 16px;
    }
`

export const CommentInputStyle = styled.input`
    width: 100%;
    border: none;

    &:focus{
        outline: none;
    }
`
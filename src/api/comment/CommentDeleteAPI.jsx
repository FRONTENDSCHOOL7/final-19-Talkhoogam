import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useNavigate } from "react-router-dom";

function CommentDeleteAPI(id, postId){
    const token = useRecoilValue(loginToken);
    const accountName = useRecoilValue(accountname);
    const navigate = useNavigate();
    const url = "https://api.mandarin.weniv.co.kr";

    const commentDelete = async () => {
        
        try {
            await fetch(`${url}/post/${postId}/comments/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            navigate(`/home`); // 더미 URL로 이동
            setTimeout(() => {
                navigate(`/post/detail/${postId}`); // 현재 경로로 다시 이동
            }, 0);
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
    };
    return {commentDelete}
};

export default CommentDeleteAPI;
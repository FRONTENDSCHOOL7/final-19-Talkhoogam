import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";
import { useNavigate } from "react-router-dom";

function PostDeleteAPI(postId){
    const token = useRecoilValue(loginToken);
    const accountName = useRecoilValue(accountname);
    const navigate = useNavigate();
    const url = "https://api.mandarin.weniv.co.kr";

    const postDelete = async () => {
        
        try {
            await fetch(`${url}/post/${postId}`, {
                method: "DELETE",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            alert("피드 삭제 완료!");
            navigate(`/profile/${accountName}`)
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
    };
    return {postDelete}
};

export default PostDeleteAPI;
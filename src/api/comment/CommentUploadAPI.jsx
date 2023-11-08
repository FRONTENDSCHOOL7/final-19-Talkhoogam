import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useNavigate } from "react-router-dom";

function CommentUploadAPI(id, userValue){
    const token = useRecoilValue(loginToken);
    const navigate = useNavigate();

    const commentUpload = async () => {
        const url = "https://api.mandarin.weniv.co.kr";

        try {
            const res = await fetch(`${url}/post/${id}/comments`, {
                method: "POST",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    comment: {
                        content: userValue,
                    },
                }),
            });
            const result = await res.json();
            return result;
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
    };
    return {commentUpload}
};

export default CommentUploadAPI;
import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

function CommentListAPI (postId){
    const token = useRecoilValue(loginToken);

    const getCommentList = useCallback(async () => {
        const url = "https://api.mandarin.weniv.co.kr";

        try {
            const res = await fetch(`${url}/post/${postId}/comments`, {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type" : "application/json"
                },
            });
            const data = await res.json();
            return data;
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        };
    }, [postId ,token]);

    return getCommentList
}
export default CommentListAPI;
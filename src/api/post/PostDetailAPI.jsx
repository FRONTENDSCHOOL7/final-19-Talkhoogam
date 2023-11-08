import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

function PostDetailAPI(postId){
    const token = useRecoilValue(loginToken);
    const url = "https://api.mandarin.weniv.co.kr";

    const getPostDetail = async () => {
        
        try {
            const res = await fetch(`${url}/post/${postId}`, {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            const data = await res.json();
            return data;
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
    };
    return getPostDetail
}

export default PostDetailAPI;

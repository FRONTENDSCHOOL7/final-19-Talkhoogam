import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useNavigate } from "react-router-dom";

function PostUploadAPI(info){
    const token = useRecoilValue(loginToken);
    const navigate = useNavigate();
    const {inputValue, itemImage} = info;
    
    const postUpload = async () => {
        const url = "https://api.mandarin.weniv.co.kr";
        
        try {
            const res = await fetch(`${url}/post`, {
                method: "POST",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    post: {
                        content: inputValue,
                        image : itemImage,
                    },
                }),
            });
            const postId = res;
            console.log(res)
            alert("피드 등록 완료!")
            navigate(`/profile`)
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
    };
    return {postUpload};
};

export default PostUploadAPI;
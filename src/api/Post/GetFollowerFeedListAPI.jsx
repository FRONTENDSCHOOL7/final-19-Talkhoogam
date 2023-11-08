import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

function GetFollowerFeedListAPI(){
    const token = useRecoilValue(loginToken);
    
    const getFeedListAPI = async () => {
            const url = "https://api.mandarin.weniv.co.kr";

            try {
                const res = await fetch(`${url}/post/feed`, {
                    method: "GET",
                    headers: {
                        Authorization : `Bearer ${token}`,
                    },
                });
                const data = await res.json()
                return data;
            } catch (error) {
                console.log("API 응답에 실패하였습니다." ,error);
            };
        };
        return {getFeedListAPI}
};

export default GetFollowerFeedListAPI;
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
                        "Content-type": "application/json",
                    },
                });
                const data = await res.json()
                return data.post;
            } catch (error) {
                return error;
            };
        };
        return {getFeedListAPI}
};

export default GetFollowerFeedListAPI;
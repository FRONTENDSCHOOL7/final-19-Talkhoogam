import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

function MyFeedListAPI({accountname}){
    const token = useRecoilValue(loginToken);
    const getMyFeedListAPI = async () => {
            const url = "https://api.mandarin.weniv.co.kr";

            try {
                const res = await fetch(`${url}/post/${accountname}/userpost`, {
                    method: "GET",
                    headers: {
                        Authorization : `Bearer ${token}`,
                        "Content-type" : "application/json"
                    },
                });
                const data = await res.json()
                return data;
            } catch (error) {
                return error;
            };
        };
        return {getMyFeedListAPI}
};

export default MyFeedListAPI;

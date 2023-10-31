import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import accountname from "../../recoil/accountname";

function MyFeedListAPI(){
    const token = useRecoilValue(loginToken);
    const accountName = useRecoilValue(accountname);
    
    const getMyFeedListAPI = async () => {
            const url = "https://api.mandarin.weniv.co.kr";

            try {
                const res = await fetch(`${url}/post/${accountName}/userpost`, {
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
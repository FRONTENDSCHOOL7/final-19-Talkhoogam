import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

const GetFollowerFeedListAPI = () => {
    const token = useRecoilValue(loginToken);

    const getData = async () =>{
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
            return data;
        } catch (error) {
            return error;
        };
    };

    return {getData}
};

export default GetFollowerFeedListAPI
import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

function AccountNameProfileAPI(accountName){
    const token = useRecoilValue(loginToken);
    
    const getAccountNameProfile = async () => {
            const url = "https://api.mandarin.weniv.co.kr";

            try {
                const res = await fetch(`${url}/profile/${accountName}`, {
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
        return {getAccountNameProfile}
};

export default AccountNameProfileAPI;
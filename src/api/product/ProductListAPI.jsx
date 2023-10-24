import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";


function ProductListAPI(newAccountname){
    const token = useRecoilValue(loginToken);
    
    const getProductList = async () => {
    const url = "https://api.mandarin.weniv.co.kr";
        
        try {
            
            const res = await fetch(`${url}/product/${newAccountname}`,{
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });

            const data = await res.json();
            return data.product;
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        };
    };
    return {getProductList};
}

export default ProductListAPI;
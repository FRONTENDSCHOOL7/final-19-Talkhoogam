import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useCallback } from "react";


function ProductDetailAPI(productId){
    const token = useRecoilValue(loginToken);
    
    const getProductDetail = useCallback( async () => {
    const url = "https://api.mandarin.weniv.co.kr";
        
        try {
            
            const res = await fetch(`${url}/product/detail/${productId}`,{
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
        };
    }, [productId, token]);

    return getProductDetail;
}

export default ProductDetailAPI;
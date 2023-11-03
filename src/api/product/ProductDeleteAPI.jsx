import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useNavigate } from "react-router-dom";
import accountname from "../../recoil/accountname";

function ProductDeleteAPI(productId){
    const token = useRecoilValue(loginToken);
    const navigate = useNavigate();
    const url = "https://api.mandarin.weniv.co.kr";
    const loginName = useRecoilValue(accountname);
    
    const productDelete = async () => {
        
        try {
            await fetch(`${url}/product/${productId}`, {
                method: "DELETE",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            alert("상품 삭제 완료!");
            // navigate(`/sellbook`);
            navigate(`/sellbook?data=${loginName}`)
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
    };
    return {productDelete}
};

export default ProductDeleteAPI;
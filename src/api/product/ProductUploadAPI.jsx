import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useNavigate } from "react-router-dom";
import accountname from "../../recoil/accountname";

const ProductUploadAPI = (products) => {
    const token = useRecoilValue(loginToken);
    const navigate = useNavigate();
    const loginName = useRecoilValue(accountname);
    const {productName, price, link, itemImage} = products;

    const productUpload = async () =>{
        const url = "https://api.mandarin.weniv.co.kr";
        try {
            
            await fetch(`${url}/product`, {
                method: "POST",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    product: {
                        itemName : productName,
                        price: parseInt(price),
                        link: link,
                        itemImage: itemImage,
                    },
                }),
            });
            alert("상품 등록 완료!")
            // navigate(`/sellbook`)
            navigate(`/sellbook?data=${loginName}`)
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        }
        
    };
    return productUpload 
}

export default ProductUploadAPI;
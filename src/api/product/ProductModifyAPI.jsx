import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";


function ProductModifyAPI(products){
    const token = useRecoilValue(loginToken);
    const {productName, price, link, itemImage, id} = products

    const productModify = async () => {
        const url = "https://api.mandarin.weniv.co.kr";

        try {
            await fetch(`${url}/product/${id}` ,{
                method: "PUT",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    product:{
                        itemName :productName,
                        price: parseInt(price),
                        link: link,
                        itemImage: itemImage,
                    },
                }),
            });
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        };
    };

    return {productModify}
};

export default ProductModifyAPI;
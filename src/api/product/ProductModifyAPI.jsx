import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useNavigate } from "react-router-dom";


function ProductModifyAPI(productDetail, itemImage ,id){
    const token = useRecoilValue(loginToken);
    const navegate = useNavigate();

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
                        itemName : productDetail.itemName,
                        price: parseInt(productDetail.price),
                        link: productDetail.link,
                        itemImage: itemImage? itemImage : productDetail.itemImage,
                    },
                }),
            });
            alert("상품 수정 완료!")
            navegate(`/product/detail/${id}`)
        } catch (error) {
            console.log("API 응답에 실패하였습니다." ,error);
        };
    };

    return {productModify}
};

export default ProductModifyAPI;
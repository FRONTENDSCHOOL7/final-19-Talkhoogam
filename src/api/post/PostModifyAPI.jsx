import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";
import { useNavigate } from "react-router-dom";

function PostModifyAPI(postDetail, itemImage, id) {
  const token = useRecoilValue(loginToken);
  const navigate = useNavigate();
  const url = "https://api.mandarin.weniv.co.kr";

  const postModify = async () => {
    try {
      await fetch(`${url}/post/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          post: {
            content: postDetail,
            image: itemImage ? itemImage : postDetail.itemImage,
          },
        }),
      });
      alert("피드 수정 완료!");
      navigate(`/post/detail/${id}`);
    } catch (error) {
      console.log("API 응답에 실패하였습니다.", error);
    }
  };

  return { postModify };
}

export default PostModifyAPI;

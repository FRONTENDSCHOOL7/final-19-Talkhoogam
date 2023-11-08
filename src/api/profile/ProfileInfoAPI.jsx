import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

const ProfileInfoAPI = async () => {
  //const token = useRecoilValue(loginToken);
  const token = localStorage.getItem("userToken");
  // const token = sessionStorage.getItem("userToken");
  const url = "https://api.mandarin.weniv.co.kr";
  try {
    const response = await fetch(`${url}/user/myinfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data.user;
  } catch (error) {
    console.log("API 응답에 실패하였습니다.", error);
    return null;
  }
};
export default ProfileInfoAPI;

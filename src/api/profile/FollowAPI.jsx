import { useRecoilValue } from 'recoil';
import loginToken from '../../recoil/loginToken';
import accountname from '../../recoil/accountname';

function FollowAPI() {
  const token = useRecoilVal(loginToken);
  const accountName = useRecoilValue(accountname);
  const url = 'https://api.mandarin.weniv.co.kr';

  const followUser = async (accountName) => {
    try {
      const res = await fetch(`${url}/profile/${accountName}/follow`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer {token}',
          'Content-type': 'application/json',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('API 접근에 실패하였습니다.', error);
    }
  };
  return { followUser };
}

export default FollowAPI;

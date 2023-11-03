import { useRecoilValue } from 'recoil';
import loginToken from '../../recoil/loginToken';

function PostUnHeartAPI(postId) {
  const token = useRecoilValue(loginToken);
  const url = 'https://api.mandarin.weniv.co.kr';

  const unHeart = async () => {
    try {
      await fetch(`${url}/post/${postId}/unheart`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      console.error('게시글에 좋아요를 눌렀습니다.', error);
    }
  };
  return { unHeart };
}

export default PostUnHeartAPI;

import { useRecoilValue } from 'recoil';
import loginToken from '../../recoil/loginToken';

function PostHeartAPI(postId) {
  const token = useRecoilValue(loginToken);
  const url = 'https://api.mandarin.weniv.co.kr';

  const onHeart = async () => {
    try {
      await fetch(`${url}/post/${postId}/heart`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
    } catch (error) {
      console.error('게시글에 좋아요를 눌렀습니다.', error);
    }
  };
  return { onHeart };
}

export default PostHeartAPI;

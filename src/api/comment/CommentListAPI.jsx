import { useRecoilValue } from "recoil";
import loginToken from "../../recoil/loginToken";

function CommentListAPI (){
    const token = useRecoilValue(loginToken);

    
}

export default CommentListAPI;
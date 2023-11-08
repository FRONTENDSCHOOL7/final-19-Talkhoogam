import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Gathering from "../pages/Gathering";
import Header from "../components/header/BasicHeader";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/NotFound";
import SetProfile from "../pages/profile/SetProfile";
import ProductAdd from "../pages/product/ProductAdd";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import ProductModify from "../pages/product/ProductModify";
import PostUpload from "../pages/post/PostUpload";
import Followings from "../pages/profile/Followings";
import Followers from "../pages/profile/Followers";
import EditProfile from "../pages/profile/EditProfile";
import PostDetail from "../pages/post/PostDetail";
import PostModify from "../pages/post/PostModify";
import Search from "../pages/Search";
import SearchBook from "../pages/post/SearchBook";
import ChatList from "../pages/chat/ChatList";
import ChatDetail from "../pages/chat/ChatDetail";
import { useRecoilValue } from "recoil";
import loginCheck from "../recoil/loginCheck";

export default function Routers() {

  const check = useRecoilValue(loginCheck);
  
  const privateRoutes = (
    <>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Navigate to={"/home"} />} />
      <Route path="/join" element={<Join />} />
      <Route path="/setprofile" element={<SetProfile />} />
      <Route path="/gathering" element={<Gathering />} />
      <Route path="/header" element={<Header />} />
      <Route path="/profile/:accountname" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
      <Route path="/profile/:accountname/followings" element={<Followings />} />
      <Route path="/profile/:accountname/followers" element={<Followers />} />
      <Route path="/productAdd" element={<ProductAdd />} />
      <Route path="/product/detail/:id" element={<ProductDetail />} />
      <Route path="/sellbook" element={<ProductList />} />
      <Route path="/productmodify/:id" element={<ProductModify />} />
      <Route path="/postupload" element={<PostUpload />} />
      <Route path="/post/detail/:id" element={<PostDetail />} />
      <Route path="/postmodify/:id" element={<PostModify />} />
      <Route path="/search" element={<Search />} />
      <Route path="/searchbook" element={<SearchBook />} />
      <Route path="/chat" element={<ChatList />}/>
      <Route path="/chat/:name" element={<ChatDetail />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
  
  return (
    <>
      {check ? privateRoutes : 
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={!check && <Navigate to={"/login"} />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      }
    </>
  );
}

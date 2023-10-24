import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Gathering from "../pages/Gathering";
import Header from "../components/header/BasicHeader";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import SetProfile from "../pages/SetProfile";
import AddProduct from "../pages/product/AddProduct";
import ProductList from "../pages/product/ProductList";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/setprofile" element={<SetProfile />} />
      <Route path="/gathering" element={<Gathering />} />
      <Route path="/header" element={<Header />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/sellbook" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

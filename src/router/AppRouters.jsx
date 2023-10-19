import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Gathering from "../pages/Gathering";
import Header from "../components/header/BasicHeader";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/gathering" element={<Gathering />} />
      <Route path="/header" element={<Header />} />
    </Routes>
  );
}

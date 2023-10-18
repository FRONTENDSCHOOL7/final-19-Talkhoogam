import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Join from "../pages/Join";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
}

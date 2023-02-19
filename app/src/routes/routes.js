import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../pages/admin/admin";
import BlogPage from "../pages/blog/BlogPage";
import HomePage from "../pages/HomePage/HomePage";
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/admin" element={<Admin />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
    </Routes>
  );
};

export default Router;

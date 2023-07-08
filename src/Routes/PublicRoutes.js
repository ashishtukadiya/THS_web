import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Components/common/Layout/Layout";
import AuthIndex from "../Components/public/Auth/index";
import SignUpIndex from "../Components/public/SignUp";

const PublicRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AuthIndex />} />
        <Route path="/sign_up" element={<SignUpIndex />} />
        {/* <Route path="/home" element={<Home/>}/> */}
      </Routes>
    </Layout>
  );
};

export default PublicRoutes;

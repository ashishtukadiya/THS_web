import React, { useState } from "react";
import "../Layout/Layout.css";
import Login from "../../pages/Public/Auth/pages/Login";
import Forgot_Password from "../../pages/Public/Auth/modals/Forgot_Password";
import OTP_Verify from "../../pages/Public/Auth/modals/OTP_Verify";
import Login_OPT from "../../pages/Public/Auth/modals/Login_OPT";
import Reset_Psw from "../../pages/Public/Auth/modals/Reset_Psw";
import Success from "../../pages/Public/Auth/modals/Success";

const Login_Layout = () => {
  return (
    <>
      <Login />
      <Login_OPT />
      <Forgot_Password />
      <OTP_Verify />
      <Reset_Psw />
      <Success />
    </>
  );
};

export default Login_Layout;

import React from "react";
import Login_OTP from "./modals/Login_OTP";
import Forgot_Password from "./modals/Forgot_Password";
import OTP_Verify from "./modals/OTP_Verify";
import Reset_Psw from "./modals/Reset_Psw";
import Success from "./modals/Success";
import Login from "./Login";

const AuthIndex = () => {
  return (
    <>
      <Login/>
      <Login_OTP />
      <Forgot_Password />
      <OTP_Verify />
      <Reset_Psw />
      <Success />
    </>
  );
};

export default AuthIndex;

import React from "react";
import MobileVerification from "./modal/MobileVerification";
import Verified from "./modal/Verified";
import SignUp from "./SignUp";

const SignUpIndex = () => {
  return (
    <>
    <SignUp/>
      <MobileVerification />
      <Verified />
    </>
  );
};

export default SignUpIndex;

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Redux/Slice/ModalSlice";

export const Store = configureStore({
  reducer: {
    loginOTP: modalReducer,
    modal: modalReducer,
    otp: modalReducer,
    resetPS: modalReducer,
    Success: modalReducer,
    MobileVerify: modalReducer,
    Verified: modalReducer,
  },
});

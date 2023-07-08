import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOtp: false,
  fpOpen: false,
  fpOTP: false,
  resetPs: false,
  success: false,
  mobile: false,
  verified: false,
};
const ModalSlice = createSlice({
  name: "modal",
 
  initialState,
  reducers: {
    toggleLoginModal: (state, action) => {
      state.loginOtp = action.payload || !state.loginOtp;
    },
    toggleFpModal: (state, action) => {
      state.fpOpen = action.payload || !state.fpOpen;
    },
    toggleOtpModal: (state, action) => {
      state.fpOTP = action.payload || !state.fpOTP;
    },
    toggleResetModal: (state, action) => {
      state.resetPs = action.payload || !state.resetPs;
    },
    toggleSuccessModal: (state, action) => {
      state.success = action.payload || !state.success;
    },
    toggleMobileVerifyModal: (state, action) => {
      state.mobile = action.payload || !state.mobile;
    },
    toggleVerifiedModal: (state, action) => {
      state.verified = action.payload || !state.verified;
    },
  },
});

export const {
  toggleFpModal,
  toggleOtpModal,
  toggleLoginModal,
  toggleResetModal,
  toggleSuccessModal,
  toggleMobileVerifyModal,
  toggleVerifiedModal,
} = ModalSlice.actions;

export default ModalSlice.reducer;

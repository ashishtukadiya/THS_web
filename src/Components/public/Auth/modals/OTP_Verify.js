import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import "../../../../assets/CSS/Forgot_psw.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFpModal,
  toggleOtpModal,
  toggleResetModal,
} from "../../../../Redux/Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const OTP_Verify = () => {
  const dispatch = useDispatch();
  const { fpOTP } = useSelector((store) => store.otp);
  return (
    <>
      <Box>
        <Modal
          className="THS-OTP-modal"
          open={fpOTP}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="THS-verify-modal" sx={style}>
            <Typography className="THS-modal-title" variant="h6" component="h2">
              OTP Verification{" "}
            </Typography>
            <Typography className="THS-modal-subtitle">
              Enter the OTP sent on 929311211
            </Typography>
            <Box className="psw-OTP-fileld">
              <TextField className="OTP-textfield" />
              <TextField className="OTP-textfield" />
              <TextField className="OTP-textfield" />
              <TextField className="OTP-textfield" />
            </Box>
            <Box className="resend-psw">
              <Button className="resend-btn" variant="text">
                Resend
              </Button>
            </Box>
            <Box className="psw-OTP-btn">
              <Button
                variant="outlined"
                className="psw-cancel-btn"
                onClick={() => {
                  dispatch(toggleOtpModal(false));
                  dispatch(toggleFpModal(false));
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(toggleOtpModal(false));
                  dispatch(toggleResetModal(true));
                }}
              >
                Verify
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default OTP_Verify;

import "../../../../assets/CSS/OTP.css";
import { Box, Button, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginModal } from "../../../../Redux/Slice/ModalSlice";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   boxShadow: 24,
};
const Login_OTP = () => {
  const dispatch = useDispatch();

  const { loginOtp } = useSelector((store) => store.loginOTP);
  return (
    <>
      <Box>
        <Modal
          className="THS-OTP-modal"
          open={loginOtp}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="THS-modal" sx={style}>
            <Typography className="THS-modal-title" variant="h6" component="h2">
              Log In with OTP{" "}
            </Typography>
            <Typography className="THS-modal-subtitle">
              Enter the OTP sent on 929311211
            </Typography>
            <Box className="OTP-fileld">
              <TextField defaultValue="1" className="OTP-textfield" />
              <TextField defaultValue="5" className="OTP-textfield" />
              <TextField defaultValue="8" className="OTP-textfield" />
              <TextField className="OTP-textfield" />
            </Box>
            <Typography className="OTP-timer">00:00</Typography>
            <Box className="OTP-verify-btn">
              <Button variant="outlined" onClick={()=>{
                dispatch(toggleLoginModal(false))
              }}>
                Cancel
              </Button>
              <Button variant="contained">Verify</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Login_OTP;

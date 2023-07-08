import "../../../../assets/CSS/Forgot_psw.css";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleFpModal, toggleOtpModal } from "../../../../Redux/Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const Forgot_Password = () => {
  const dispatch = useDispatch();
  const { fpOpen } = useSelector((store) => store.modal);

  return (
    <>
      <Box>
        <Modal
          className="THS-OTP-modal"
          open={fpOpen}
          // onClose={()=>toggleFpModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="THS-verify-modal" sx={style}>
            <Box>
              <Typography
                className="THS-modal-title"
                variant="h6"
                component="h2"
              >
                Forgot Password{" "}
              </Typography>
              <Typography className="THS-modal-subtitle">
                Please enter registered Mobile / email below to receive
                verification code.{" "}
              </Typography>
              <Box className="psw-field">
                <FormLabel className="psw-label">Mobile / Email</FormLabel>
                <TextField className="psw-textfield" />
              </Box>
              <Box className="psw-verify-btn">
                <Button
                  variant="outlined"
                  className="psw-cancel-btn"
                  onClick={() => {
                    dispatch(toggleFpModal(false));
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    dispatch(toggleFpModal(false));
                    dispatch(toggleOtpModal(true));
                  }}
                  variant="contained"
                >
                  Send OTP
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Forgot_Password;

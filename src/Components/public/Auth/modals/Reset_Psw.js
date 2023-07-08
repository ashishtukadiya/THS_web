import {
  Box,
  Button,
  FormLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleOtpModal,
  toggleResetModal,
  toggleSuccessModal,
} from "../../../../Redux/Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const Reset_Psw = () => {
  const dispatch = useDispatch();
  const { resetPs } = useSelector((store) => store.resetPS);
  return (
    <>
      <Box>
        <Modal
          className="THS-OTP-modal"
          open={resetPs}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="THS-verify-modal" sx={style}>
            <Typography className="THS-modal-title" variant="h6" component="h2">
              Reset Password{" "}
            </Typography>
            <Typography className="THS-modal-subtitle">
              Create new password for your account.{" "}
            </Typography>
            <Box className="psw-field">
              <FormLabel className="psw-label">New Password</FormLabel>
              <TextField className="psw-textfield" />
            </Box>
            <Box className="psw-field">
              <FormLabel className="psw-label">Repeat New Password</FormLabel>
              <TextField className="psw-textfield" />
            </Box>

            <Box className="psw-OTP-btn">
              <Button
                variant="outlined"
                className="psw-cancel-btn"
                onClick={() => {
                  dispatch(toggleResetModal(false));
                  dispatch(toggleOtpModal(false));
                }}
              >
                Cancel
              </Button>

              <Button
                onClick={() => {
                  dispatch(toggleResetModal(false));
                  dispatch(toggleSuccessModal(true));
                }}
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Reset_Psw;

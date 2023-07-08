import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Success_icon from "../../../../assets/svg/Success.svg";
import { toggleSuccessModal } from "../../../../Redux/Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Success = () => {
  const dispatch = useDispatch();

  const { success } = useSelector((store) => store.Success);
  return (
    <>
      <Box>
        <Modal
          className="THS-OTP-modal"
          open={success}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="THS-success-modal" sx={style}>
            <Box>
              <Button
                onClick={() => {
                  dispatch(toggleSuccessModal(false));
                }}
                className="modal-close-btn"
              >
                <CloseIcon />
              </Button>
            </Box>
            <Box className="success-modal">
              <img className="success-modal-img" src={Success_icon} />
            </Box>
            <Box>
              <Typography className="success-modal-msg">Done</Typography>
              <Typography className="success-modal-subMsg">
                Password reset successfully done!
              </Typography>
            </Box>
            <Box className="success-btn">
              <Button
                className="successfully"
                onClick={() => {
                  // dispatch(toggleResetModal(false));
                  dispatch(toggleSuccessModal(true));
                }}
                variant="contained"
              >
                Go to Log In
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Success;

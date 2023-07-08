import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleMobileVerifyModal,
  toggleVerifiedModal,
} from "../../../../Redux/Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "border-radius": "16px",
  boxShadow: 24,
  
};

export default function MobileVerification() {
  // const [openVerified] = useState(false);

  const dispatch = useDispatch();
  const { mobile } = useSelector((store) => store.MobileVerify);
  return (
    <>
      <Box>
        <Box>
          <Modal
            className="verification-body"
            open={mobile}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="verification-box" sx={style}>
              <Typography className="verification-title">
                Mobile Verification
              </Typography>
              <Typography className="verification-subtitle">
                Enter the OTP sent on 929311211
              </Typography>
              <Box className="input-code">
                <TextField defaultValue={0} className="text-box" />
                <TextField defaultValue={4} className="text-box" />
                <TextField defaultValue={6} className="text-box" />
                <TextField defaultValue={5} className="text-box" />
              </Box>
              <Typography className="resend">Resend</Typography>
              <Box className="signUp-verify-modal">
                {
                  /* <Button
                  className="cancel-btn"
                  onClick={() => {
                    dispatch(toggleMobileVerifyModal(false));
                  }}
                >
                  <Typography className="cancel-text">Cancel</Typography>
                </Button>
                <Button
                  className="verify-btn verify-text"
                  onClick={() => {
                    dispatch(toggleMobileVerifyModal(false));
                    dispatch(toggleVerifiedModal(true));
                  }}
                >
                  Verify
                 
                </Button> */
                  <Box className="signUp-modal-btn">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        dispatch(toggleMobileVerifyModal(false));
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="signUp-cancel-btn"
                      onClick={() => {
                        dispatch(toggleMobileVerifyModal(false));
                        dispatch(toggleVerifiedModal(true));
                      }}
                      variant="contained"
                    >
                      Verify
                    </Button>
                  </Box>
                }
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
}

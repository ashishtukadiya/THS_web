import "../Verification/MobileVerification.css";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Verified from "../VerifiedNumber/Verified";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 378,
  height: 334,
  "border-radius": "16px",
  boxShadow: 24,
  p: 4,
};

export default function MobileVerification({
  open,
  handleClose,
  handleOpenVerified,
}) {
  const [openVerified] = useState(false);

  return (
    <>
      <Box>
        <Box>
          <Modal
            className="verification-body"
            open={open}
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
              <Box>
                <Button className="cancel-btn" onClick={handleClose}>
                  <Typography className="cancel-text">Cancel</Typography>
                </Button>
                <Button className="verify-btn" onClick={handleOpenVerified}>
                  <Typography className="verify-text">Verify</Typography>
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
      {openVerified && <Verified handleClose={handleClose} />}
    </>
  );
}

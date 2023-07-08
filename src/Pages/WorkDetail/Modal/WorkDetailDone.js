import "../../../assets/CSS/WorkDetailDone.css";
import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "../../../assets/Images/VerifiedIcon.svg";
import CloseIcon from "../../../assets/Images/CloseIcon.svg";

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

export const WorkDetailDone = ({ fopen, handleFclose }) => {
  const [openSkip, setOpenSkip] = useState(false);
  const navigate = useNavigate();

  const handleOpenSkip = () => {
    setOpenSkip(true);
    navigate("/verified");
  };

  const handleCloseSkip = () => {
    setOpenSkip(false);
  };
  return (
    <>
      <Box>
        <Box>
          <Modal
            className="verification-body"
            open={fopen}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="verified-box" sx={style}>
            <Box className="close-btn" onClick={handleFclose}>
                <img src={CloseIcon}  className="close-icon" alt="CloseIcon" />
              </Box>

              <Box className="right-box">
                <img src={VerifiedIcon} className="right" />
              </Box>
              <Typography className="submit-txt">
                Your Profile Submited Successfully
              </Typography>

              <Box className="info-box">
                <Typography className="info-txt-msg">
                  Please choose your preferred Schedule and provide A/C Details
                  to receive Payments from Online Consultation. Thanks!
                </Typography>
              </Box>
              <Button
                variant="contained"
                className="submit-btn"
                // onClick={() => handleOpen()}
              >
                Set up Schedule & Payment
              </Button>
            </Box>
          </Modal>
        </Box>
      </Box>
      {openSkip}
    </>
  );
};

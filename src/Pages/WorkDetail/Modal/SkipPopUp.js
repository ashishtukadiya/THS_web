import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "../../../assets/CSS/SkipPopUp.css";
import SkipPopup from "../../../assets/Images/SkipPopup.svg";
import { useNavigate } from "react-router-dom";

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

export default function SkipPopUp({ open, handleClose }) {
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
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="skip-box" sx={style}>
              <Box className="exclamation-box">
                <img src={SkipPopup} className="exclamation" />
              </Box>

              <Box className="warning-box">
                <Typography className="warning-txt">
                  Are you sure you want to
                  <Typography className="warning-txt">
                    skip the registration?
                  </Typography>
                </Typography>
              </Box>

              <Box className="info-box">
                <Typography className="info-txt">
                  Only Verified doctors are allowed to consult
                  <Typography className="info-txt" >on THS Platform.</Typography> 
                </Typography>
              </Box>
              <Box>
                <Button className="cancel-btn" >
                  <Typography className="cancel-text" onClick={handleClose}>Cancel</Typography>
                </Button>
                <Button className="skipanyway-btn" >
                  <Typography className="skipanyway-text" onClick={handleOpenSkip}>Skip Anyway</Typography>
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
      {openSkip  }
    </>
  );
}

import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import Succsesfully from "../../assests/Images/Succsesfully.svg";
import CloseIcon from "../../assests/Images/Close.svg";
import "../../assests/CSS/Sucsess.css";
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

const Sucsess = ({ open, handleClose }) => {
  const [openSkip, setOpenSkip] = useState(false);
  const handleOpenSkip = () => {
    setOpenSkip(true);
  }
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
            <Box className="verified-bo" sx={style}>
              <Box className="close-btn" onClick={handleClose}>
                <img src={CloseIcon} className="close-icon" alt="CloseIcon" />
              </Box>

              <Box className="right-bo">
                <img src={Succsesfully} className="right" alt="" />
              </Box>
              <Typography className="submit-txt">
                Detail Submited Successfully
              </Typography>

              <Box className="info-box">
                <Typography className="info-txt-msg">
                  Our team will analyse the deatil and rever back in up to 3
                  business days.s.
                </Typography>
              </Box>
              <Button
                variant="contained"
                className="submit-bt"
                onClick={handleOpenSkip}
              >
                Go to Home Dashboard
              </Button>
            </Box>  
          </Modal>
        </Box>
      </Box>
      {openSkip}
    </>
  );
};

export default Sucsess;

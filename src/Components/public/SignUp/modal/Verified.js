import "../../../../assets/CSS/Verified.css"
import CloseIcon from "../../../../assets/svg/CloseIcon.svg";
import SuccessIcon from "../../../../assets/svg/Success.svg";
import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleVerifiedModal } from "../../../../Redux/Slice/ModalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 378,
  height: 451,
  "border-radius": "16px",
  boxShadow: 24,
  p: 4,
  padding: "none",
};

export default function Verified({ handleClose }) {
  const navigate = useNavigate();

  // const handleNavigateToDashboard = () => {
  //   navigate("/profile");
  // };

  
    navigate("/profile");
  

  const dispatch = useDispatch();

  const { verified } = useSelector((store) => store.Verified);
  return (
    <>
      <Box>
        <Box>
          <Modal
            className="verified-body"
            open={verified}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="verified-box" sx={style}>
              <Box
                className="close-btn"
                //  onClick={handleNavigateToDashboard}
              >
                <img
                  src={CloseIcon}
                  onClick={() => {
                    dispatch(toggleVerifiedModal(false));
                  }}
                  className="close-icon"
                  alt="CloseIcon"
                />
              </Box>
              <Box className="success-modal">
                <img
                  className="success-icon"
                  src={SuccessIcon}
                  alt="SuccessIcon"
                />
              </Box>
              <Box className="welcome-box">
                <Typography className="welcome-text">
                  Welcome to THS’s growing Doctors Community
                </Typography>
              </Box>
              <Box className="detail-box">
                <Typography className="detail-text">
                  Please fill Profile details to get verified and start
                  consulting online on THS
                </Typography>
              </Box>
              {/* <Box className="">
                <Button
                  // variant="contained"
                  className="fill-profile-btn "
                  onClick={() => {
                    dispatch(toggleVerifiedModal(true));
                  }}
                >
                  {" "}
                  Fill Out My Profile
                </Button>
              </Box> */}
              <Box>
                <Button
                  variant="contained"
                  className="fill-text-btn"
                  onClick={() => {
                    dispatch(toggleVerifiedModal(true));
                  }}
                >
                  <Typography className="fill-text">
                  Fill Out My Profile
                  </Typography>
                </Button>
              </Box>

              
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
}

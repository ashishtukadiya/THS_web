import "../ViewDetail/ViewDetail.css";
import { Box, Modal, Typography, Button, Divider } from "@mui/material";
import React from "react";
import Appointment from "../../assets/svg/Appointment.svg";
import ChatIcon from "../../assets/svg/Chat-icon.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 462,
  height: 500,
  "border-radius": "16px",
  boxShadow: 24,
  p: 4,
};

export default function ViewDetail({ open, handleClose }) {
  return (
    <>
      <Box>
        <Box>
          <Modal
            className="view-popup-body"
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="view-popup-box" sx={style}>
              <Box className="view-box-modal">
                <img src={Appointment} alt="" className="view-logo" />
                <Typography className="view-title">
                  Appointment Details
                </Typography>
              </Box>
              <Box className="status-box">
                <Typography className="view-id">Id #123113131</Typography>
                <Typography className="status">Completed</Typography>
              </Box>
              <Box className="scroll-box">
              <Box className="patient-detail-box">
                <Typography className="patient-title">Patient</Typography>
                <Typography className="patient-name">John Doe</Typography>
              </Box>
              <Typography className="patient-detail">23 | M</Typography>
              <Divider className="divider-detail" />
              <Box className="patient-detail-box">
                <Typography className="patient-consultation">
                  Consultation for
                </Typography>
                <Typography className="patient-name">Bones & joints</Typography>
              </Box>
              <Divider className="divider-detail" />
              <Box className="patient-detail-box">
                <Typography className="patient-consultation-date">
                  Date & Time
                </Typography>
                <Typography className="patient-name">
                  11 April, 2022 - 11:00 am
                </Typography>
              </Box>
              <Divider className="divider-detail" />
              <Box className="patient-detail-box">
                <Typography className="patient-fee">Fee</Typography>
                <Typography className="patient-name">500 Rs.</Typography>
              </Box>
              <Divider className="divider-detail" />
              <Box className="patient-detail-box">
                <Typography className="patient-prescription">
                  Prescription
                </Typography>
                <Button className="view-form">
                  <Typography className="view-name">View</Typography>
                </Button>
              </Box>
              <Divider className="divider-detail" />
              <Box className="patient-detail-box">
                <Typography className="patient-test">Lab Test</Typography>
                <Typography className="patient-name">CBC</Typography>
              </Box>
              <Typography className="test-example">Test name</Typography>
              <Divider className="divider-detail" />
              <Box className="patient-detail-box">
                <Typography className="patient-doc-recommend">
                  Recommended Doctor
                </Typography>
                <Typography className="patient-doc-name">
                  Neurologist
                </Typography>
              </Box>
              <Divider className="divider-detail" />
              </Box>
              
              <Box className="open-chat-box">
                <Button className="close-popup-btn" onClick={handleClose}>
                  <Typography className="close-popup-text">Close</Typography>
                </Button>
                <Button className="open-chat-popup-btn">
                  <img src={ChatIcon} alt="" className="open-chat-icon" />
                  <Typography className="open-chat-popup-text">
                    Open Chat
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

import "../VerifyHold/VerifyHold.css";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import OnHold from "../../assets/svg/OnHold.svg";

export default function VerifyHold() {
  return (
    <>
      <Box className="hold-box">
        <img src={OnHold} alt="" className="hold-icon" />
        <Typography className="hold-title">Verification on hold!</Typography>
        <Typography className="hold-subtitle">
          Please fill out required detail again. Thanks!
        </Typography>
        <Typography className="hold-note">
          Note: ID proof photo is not clear
        </Typography>
        <Typography className="hold-message">
          Please fill Profile details to get verified and start consulting
          online on THS
        </Typography>
        <Button className="hold-btn">
          <Typography className="hold-btn-text">Edit My Profile</Typography>
        </Button>
      </Box>
    </>
  );
}

import "../WarningPage/WarningDashboard.css";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Warning from "../../assets/svg/Warning.svg";
import "../WarningPage/WarningDashboard.css";

export default function WarningDashboard() {
  return (
    <>
      <Box className="warning-box">
        <img src={Warning} alt="" className="warning-icon" />
        <Typography className="warning-text">
          Join THS's Growing Doctors Community
        </Typography>
        <Typography className="warning-sub-text">
          Please fill out your profile and verify your identity before starting.
          Thanks!
        </Typography>
        <Typography className="warning-message">
          Once profile verification is completed, you will get online consultation
          requests.
        </Typography>
        <Button className="fill-btn">
            <Typography className="fill-message">Fill Out My Profile</Typography>
        </Button>

        {/* <Button className="fill-btn">
            <Typography className="schedule-message">Set up Schedule & Payment</Typography>
        </Button> */}
      </Box>
    </>
  );
}

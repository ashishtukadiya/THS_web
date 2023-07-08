import "../UserSettings/Settings.css";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography } from "@mui/material";
import React from "react";
import TimeSlot from "./TimeSlot";

export default function Settings() {
  return (
    <>
      <Box className="setting-body">
        <Typography className="setting-name" variant="h2">
          Settings
        </Typography>
      </Box>
      <Box className="main-layout">
        <Box className="setting-layout">
          <Box className="time-box">
            <ScheduleIcon className="clock-img" />
            <Typography className="time-slot">Time Slot & Fees</Typography>
            <ExpandMoreIcon className="arrow-left-time" />
          </Box>
          <Box className="bank-box">
            <AccountBalanceIcon className="clock-img" />
            <Typography className="time-slot">Bank Details</Typography>
            <ExpandMoreIcon className="arrow-left-bank" />
          </Box>
          <Box className="lock-box">
            <LockOutlinedIcon className="clock-img" />
            <Typography className="time-slot">Change Password</Typography>
            <ExpandMoreIcon className="arrow-left-lock" />
          </Box>
          <Box className="mobile-box">
            <SmartphoneOutlinedIcon className="clock-img" />
            <Typography className="time-slot">Change Mobile no.</Typography>
            <ExpandMoreIcon className="arrow-left-mobile" />
          </Box>
        </Box>
        <Box className="box-layout">
            <TimeSlot />
        </Box>
      </Box>
    </>
  );
}

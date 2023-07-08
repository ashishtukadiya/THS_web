import "../WelcomePage/WelcomeDashboard.css";
import { Box, Typography } from "@mui/material";
import React from "react";
import "../../../assets/CSS/DashBoard.css";
import Welcome from "../../../assets/svg/Welcome.svg";

export default function WelcomeDashboard() {
  return (
    <>
    <Header />
      <Box className="main-box">
        <img src={Welcome} alt="" className="welcome-icon" />

        <Typography variant="h2" className="welcome-to-THS">
          Welcome to{" "}
          <Typography variant="h2" className="welcome-sub-title">
            THS’s growing Doctors Community
          </Typography>
        </Typography>

        <Typography className="sub-text">
          Our Medical Expert will check and confirm about your profile within
          2-3 business days.
        </Typography>

        <Typography className="request-text">
          Once profile verification completed, you will get online consultaion
          requests.
        </Typography>
      </Box>
    </>
  );
}

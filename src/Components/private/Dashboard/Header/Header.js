import { Box, Typography } from "@mui/material";
import React from "react";
import "../Header/Header.css";
import Icon1 from "../../../../assets/svg/dashboard-icons/Icon1.svg";
import Icon2 from "../../../../assets/svg/dashboard-icons/Icon2.svg";
import Icon3 from "../../../../assets/svg/dashboard-icons/Icon3.svg";
import Icon4 from "../../../../assets/svg/dashboard-icons/Icon4.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function Header() {
  return (
    <>
      <Box>
        <Box className="dashboard-body">
          <Typography className="body-name" variant="h2">
            Dashboard
          </Typography>
        </Box>

        <Box className="total-consult">
          <HelpOutlineIcon className="question-icon" />
          <img src={Icon1} alt="" className="icon1" />
          <Typography className="consult-number">0</Typography>
          <Typography className="consult-text">Total Consultations</Typography>
        </Box>

        <Box className="cancel-consult">
          <HelpOutlineIcon className="question-icon" />
          <img src={Icon2} alt="" className="icon1" />
          <Typography className="consult-number">0</Typography>
          <Typography className="consult-text">
            Cancelled Consultations
          </Typography>
        </Box>

        <Box className="total-revenue">
          <HelpOutlineIcon className="question-icon" />
          <img src={Icon3} alt="" className="icon1" />
          <Typography className="consult-number">0</Typography>
          <Typography className="consult-text">Total Revenue</Typography>
        </Box>

        <Box className="current-revenue">
          <HelpOutlineIcon className="question-icon" />
          <img src={Icon4} alt="" className="icon1" />
          <Typography className="consult-number">0</Typography>
          <Typography className="consult-text">
            Current Month Revenue
          </Typography>
        </Box>
      </Box>
    </>
  );
}

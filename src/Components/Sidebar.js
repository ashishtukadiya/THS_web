import { Box, Typography } from "@mui/material";
import React from "react";
import "../assests/CSS/Sidebar.css";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ScienceIcon from "@mui/icons-material/Science";
import Dtr from "../assests/Images/Doctor.svg";
import DescriptionIcon from '@mui/icons-material/Description';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Medicine from "./Medicine";
export default function Sidebar() {
  return (
    <>
      <Box clssName="text-body">
        <Typography className="body-name" variant="h6">
          Create Prescription
        </Typography>
      </Box>
      <Box className="main-layout">
        <Box className="body-layout">
          <Box className="medi-bo">
            <VaccinesIcon className="m-slote" />
            <Typography className="time-slot">Medicines</Typography>
            <ExpandMoreIcon className="arrow-left-time" />
          </Box>
          <Box className="lab-box">
            <ScienceIcon className="m-slote" />
            <Typography className="time-slot">Lab Tests</Typography>
            <ExpandMoreIcon className="arrow-left-bank" />
          </Box>
          <Box className="d-box">
            <img src={Dtr} alt="" className="m-slote" />
            <br />
            <Typography className="time-slote">Refer a Doctor</Typography>
            <ExpandMoreIcon className="arrow-left-lock" />
          </Box>
          <Box className="n-box">
            <DescriptionIcon className="m-slote"/>
            <Typography className="time-slote">Doctor note</Typography>
            <ExpandMoreIcon className="arrow-left-mobile"/>

          </Box>
        </Box>
        <Box className="box-layout">
          <Medicine/>
        </Box>
      </Box>
    </>
  );
}

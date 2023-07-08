import "../Navbar/Navbar.css";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  styled,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import "./Navbar.css";
import "./Navbar.css";
import Logo from "../../../../assets/svg/logo.svg";
import DashboardGrid from "../../../../assets/svg/DashboardGrid.svg";
import Consultation from "../../../../assets/svg/Consultation.svg";
import Payouts from "../../../../assets/svg/Payouts.svg";
import Chat from "../../../../assets/svg/Chat.svg";
import Photo from "../../../../assets/svg/Photo.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Dropdown from "../Dropdown";
import CancelPopup from "../../../Pages/CancelPopup/CancelPopup";
import ViewDetail from "../../../Pages/ViewDetail/ViewDetail";
import { NavLink } from "react-router-dom";
// import ViewDetail from "../../../../Pages/ViewDetail/ViewDetail";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 9,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 18,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export default function Navbar() {
  //cancel appointment Popup
  const [showClosePopup, setShowClosePopup] = useState(false);

  const handleOpenPopup = () => {
    setShowClosePopup(true);
  };

  const handleClosePopup = () => {
    setShowClosePopup(false);
  };

  //view detail Popup
  const [showViewPopup, setShowViewPopup] = useState(false);

  const handleViewPopup = () => {
    setShowViewPopup(true);
  }

  const handleCloseViewPopup = () => {
    setShowViewPopup(false);
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Box className="header">
        <Box className="logo-box">
          <img src={Logo} alt="" className="logo-title" />
        </Box>

        <Box className="dashboard-box">
          <Box className="common-box">
          <img src={Grid} alt="" className="grid-logo" />
          <Typography className="dashboard-text">Dashboard</Typography>
          </Box>
          <Box className="common-box">
          <img src={Consultation} alt="" className="phone-logo" />
          <Typography className="consultation-text">Consultations</Typography>
          </Box>
          <Box className="common-box">
          <img src={Payouts} alt="" className="payouts-logo" />
          <Typography className="payouts-text">Payouts</Typography>
          </Box>
          <Box className="common-box">
          <img src={Chat} alt="" className="chat-logo" />
          <Typography className="chat-text">Chat</Typography>
          </Box>
        </Box>

        <Box className="toggle-box">
          <FormGroup className="toggle-icon">
            <FormControlLabel control={<Android12Switch defaultUnChecked />} />
          </FormGroup>
          <Typography className="go-online">Go Online</Typography>
        </Box>

        <Box className="user-profile">
          <img
            src={Photo}
            alt=""
            className="profile-photo"
            onClick={handleOpenPopup}
          />
          <Typography className="user-name" onClick={handleViewPopup}>Dr John Doe</Typography>
          <Typography className="user-number">123121</Typography>
          {isDropdownOpen ? (
            <ExpandMoreIcon className="arrow-down" onClick={toggleDropdown} />
          ) : (
            <ExpandLessIcon className="arrow-down" onClick={toggleDropdown} />
          )}
          {isDropdownOpen && <Dropdown />}
        </Box>
      </Box>
      {showClosePopup && (
        <CancelPopup open={showClosePopup} handleClose={handleClosePopup} />
      )}
      {/* {showViewPopup && (
        <ViewDetail open={showViewPopup} handleClose={handleCloseViewPopup} />
      )} */}
    </>
  );
}

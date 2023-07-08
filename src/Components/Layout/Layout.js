import "./Layout.css";
import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/images/Logo.svg";
import SideImg from "../../assets/images/sideimage.svg";
const Layout = ({ children }) => {
  return (
    <>
      <Box className="THS-body-part">
        <Box className="">
          <Box className="THS-logo-title">
            <Box className="logo-image">
              <img src={Logo} />
            </Box>

            <Box>
              <Typography className="THS-logo-text" component="h6" variant="h6">
                TOTAL HEALTH SOLUTION
              </Typography>
              <Typography className="logo-text" component="div" variant="h8">
                WHERE HEALTH MEETS COMFORT
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <img className="THS-side-img" src={SideImg} />
            </Box>
            <Box className="THS-SIDE-IMG-TEXT">
              <Typography
                className="THS-bottom-text"
                variant="subtitle1"
                gutterBottom
              >
                Help millions of people everywhere, every time
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="rectangle">{children}</Box>
      </Box>
    </>
  );
};

export default Layout;

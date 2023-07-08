import "../Layout/Layout.css";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../../assets/svg/logo.svg";
import SideImg from "../../../assets/svg/sideImage.svg";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Box className="">
              <Box className="THS-logo-title">
                <Box className="logo-image">
                  <img src={Logo}  alt=""/> 
                </Box>

                <Box>
                  <Typography
                    className="THS-logo-text"
                    component="h6"
                    variant="h6"
                  >
                    TOTAL HEALTH SOLUTION
                  </Typography>
                  <Typography
                    className="logo-text"
                    component="div"
                    variant="h8"
                  >
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
          </Grid>
          <Grid xs={8}>
            <Box className="rectangle">{children}</Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;

{
  /* <Box className="THS-container">
        <Box className="THS-Box"  spacing={2} columns={16}>
          <Box className="logo" xs={8}>
            <Box className="THS-logo-title">
              <Box><img src={Logo} /></Box>
              

              <Box>
                <Typography
                  className="THS-logo-text"
                  component="h6"
                  variant="h6"
                >
                  TOTAL HEALTH SOLUTION
                </Typography>
              </Box>
            </Box>
            <Box>
              <img src={SideImg} />
              <Typography variant="subtitle1" gutterBottom>
                Help millions of people everywhere, every time
              </Typography>
              {/* <Typography variant="h6">
                 
                </Typography> 
            </Box>
          </Box> */
}

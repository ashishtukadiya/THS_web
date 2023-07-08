import "../SignUp/SignUp.css";
import React, { useState } from "react";
import {
  Box,
  FormLabel,
  TextField,
  Typography,
  Grid,
  Button,
  Link,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import MobileVerification from "../Verification/MobileVerification";
import Verified from "../VerifiedNumber/Verified";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPass = () => setShowPass((show) => !show);
  const [showMobileVerification, setShowMobileVerification] = useState(false);
  const [showVerified, setShowVerified] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPass = (event) => {
    event.preventDefault();
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleOpenMobileVerification = () => {
    setShowMobileVerification(true);
  };

  const handleCloseMobileVerification = () => {
    setShowMobileVerification(false);
  };

  const handleOpenVerified = () => {
    setShowMobileVerification(false);
    setShowVerified(true);
    navigate("/verified");
  };

  return (
    <>
      <Box className="signup-page">
        <Typography variant="h1" className="signup-title" gutterBottom>
          THS Doctor’s Sign Up
        </Typography>
        <Typography className="signup-subtitle" gutterBottom>
          Welcome to THS!
        </Typography>
        <Box>
          <Box>
            <Grid container>
              <FormLabel className="first-name">First Name</FormLabel>
              <TextField
                variant="outlined"
                className="signup-field-name"
              ></TextField>
            </Grid>
            <Grid container>
              <FormLabel className="last-name">Last Name</FormLabel>
              <TextField
                variant="outlined"
                className="signup-field-lastname"
              ></TextField>
            </Grid>
          </Box>
          <Box>
            <FormLabel className="mobile-number">Mobile Number</FormLabel>
            <TextField
              variant="outlined"
              className="signup-field-number"
            ></TextField>
          </Box>
          <Box>
            <FormLabel className="email">Email</FormLabel>
            <TextField
              variant="outlined"
              className="signup-field-email"
            ></TextField>
          </Box>
          <Box>
            <FormLabel className="password">Password</FormLabel>
            <OutlinedInput
              className="signup-field-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <FormLabel className="confirm-password">Confirm Password</FormLabel>
            <OutlinedInput
              className="signup-field-cpass"
              type={showPass ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPass}
                    onMouseDown={handleMouseDownPass}
                    edge="end"
                  >
                    {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              className="signup-btn"
              onClick={handleOpenMobileVerification}
            >
              <Typography className="signup-text" gutterBottom>
                Sign Up
              </Typography>
            </Button>
          </Box>
          <Box>
            <Typography className="signup-description" gutterBottom>
              By clicking sign up you are agreeing to the{" "}
              <Typography className="color" variant="p">
                Terms of use
              </Typography>{" "}
              and the
              <Typography className="color" variant="p">
                {" "}
                Privacy policy
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Typography className="signup-link" gutterBottom>
              Already have an account?{" "}
              <Link className="log-in" onClick={navigateToLogin}>
                Log In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      {showMobileVerification && (
        <MobileVerification
          open={showMobileVerification}
          handleClose={handleCloseMobileVerification}
          handleOpenVerified={handleOpenVerified}
        />
      )}
      {showVerified && <Verified handleClose={() => setShowVerified(false)} />}
    </>
  );
}

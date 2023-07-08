import {
  Box,
  Button,
  FormLabel,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
  makeStyles,
} from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "../../../assets/CSS/LogIn.css";
import { useDispatch } from "react-redux";
import {
  toggleFpModal,
  toggleLoginModal,
} from "../../../Redux/Slice/ModalSlice";
import { navigate, useNavigate } from "react-router-dom";

// const useStyle = makeStyles({
//   font: {
//     fontsize: "13px",
//     fontfamily: "Mulish",
//     fontweight: "600",
//     lineheight: "16px",
//   },
// });
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Box className="THS-login-container">
        <Typography className="THS-login-title" variant="h1" gutterBottom>
          THS Doctor's Sign In{" "}
        </Typography>
        <Typography className="THS-login-subtitle" variant="h6" gutterBottom>
          Welcome back to THS!{" "}
        </Typography>

        <Box className="THS-login-formControls">
          <Box className="">
            <FormLabel className="THS-login-label">Mobile / Email</FormLabel>
            <TextField placeholder="Text" className="THS-login-textfield" />
          </Box>
          <Box className="THS-login-password">
            <FormLabel className="THS-login-label">Password</FormLabel>
            <OutlinedInput
              placeholder="Password"
              className="THS-login-OutlinedInput-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
          <Box className="THS-btn">
            <Button className="THS-login-btn" variant="contained">
              Log In
            </Button>
          </Box>
          <Box className="THS-login-details">
            <Link className="link-text" href="#" onClick={() => dispatch(toggleLoginModal())}>
              Login with OTP
            </Link>
            <Link  className="link-text" href="#" onClick={() => dispatch(toggleFpModal())}>
              {" "}
              Forget Password?
            </Link>
          </Box>
          <Box className="THS-login-error-msg">
            <Typography className="THS-login-msg" variant="h6" gutterBottom>
              Don't have an account?{" "}
              <Link
                href="#"
                className="THS-option"
                onClick={() => navigate("/sign_up")}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;

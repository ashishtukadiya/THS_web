import React, { useState } from "react";
import "../../../assets/CSS/SignUp.css";
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
import MobileVerification from "../SignUp/modal/MobileVerification";
import Verified from "../SignUp/modal/Verified";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMobileVerifyModal } from "../../../Redux/Slice/ModalSlice";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  mobileNumber: yup.string().required("Mobile number is required"),
  email:yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

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
    navigate("/");
  };

  const dispatch = useDispatch();
  return (
    <>
      <Box className="signup-page">
        <Box>
          {" "}
          <Typography variant="h1" className="signup-title" gutterBottom>
            THS Doctor’s Sign Up
          </Typography>
          <Typography className="signup-subtitle" gutterBottom>
            Welcome to THS!
          </Typography>
        </Box>

        <Box className="signUp-form">
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <Grid className="textfield-grid" spacing={2}>
                <Grid className="label-grid" xs={8}>
                  <FormLabel className="textfield-name">First Name</FormLabel>
                  <TextField
                    variant="outlined"
                    className="signup-field-name"
                    id="firstName"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && formik.errors.firstName}
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  ></TextField>
                </Grid>
                <Grid xs={8}>
                  <FormLabel className="textfield-name">Last Name</FormLabel>
                  <TextField
                    variant="outlined"
                    className="signup-field-lastname"
                    id="lastName"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && formik.errors.lastName}
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  ></TextField>
                </Grid>
              </Grid>
            </Box>

            <Box className="form-fields">

              

              <Box className="signUp-form-control">
                <FormLabel className="signUp-form-label">
                  Mobile Number
                </FormLabel>
                <TextField
                  variant="outlined"
                  className="signUp-form-field"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formik.values.mobileNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.mobileNumber && formik.errors.mobileNumber
                  }
                  helperText={
                    formik.touched.mobileNumber && formik.errors.mobileNumber
                  }
                ></TextField>
              </Box>
              <Box className="signUp-form-control">
                <FormLabel className="signUp-form-label">
                  Email
                </FormLabel>
                <TextField
                  variant="outlined"
                  className="signUp-form-field"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.email && formik.errors.email
                  }
                  helperText={
                    formik.touched.email && formik.errors.email
                  }
                ></TextField>
              </Box>

              <Box className="signUp-form-control">
                <FormLabel className="signUp-form-label">Password</FormLabel>
                <OutlinedInput
                  className="signUp-form-field"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
              <Box className="signUp-form-control">
                <FormLabel className="signUp-form-label">
                  Confirm Password
                </FormLabel>
                <OutlinedInput
                  className="signUp-form-field"
                  type={showPass ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
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
            </Box>

            <Box className="signUp-form-btn">
              <Button
                variant="contained"
                className="signup-btn signup-text"
                // onClick={handleOpenMobileVerification}
                onClick={() => dispatch(toggleMobileVerifyModal())}
                type="submit"
              >
                Sign Up
              </Button>
            </Box>
          </form>
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
    </>
  );
}

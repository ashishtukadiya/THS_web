import "../../assets/CSS/WorkDetail1.css";
import React, { useState, useRef } from "react";
import male from "../../assets/Images/Male.svg";
import male2 from "../../assets/Images/Male2.svg";
import Female from "../../assets/Images/Female.svg";
import Female2 from "../../assets/Images/Female2.svg";
import Avatar from "../../assets/Images/Avatar.svg";
import DropDownIcon from "../../assets/Images/DropDownIcon.svg";
import SkipPopUp from "./Modal/SkipPopUp";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  FormLabel,
  TextField,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";

export const Step1 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    const reader = new FileReader();

    reader.onload = (e) => {
      const uploadedImage = e.target.result;
      console.log(uploadedImage);

      setUploadedFile(uploadedImage);
    };

    reader.readAsDataURL(file);
  };
  const handleGenderClick = () => {
    setShowSecondImage((prevValue) => !prevValue);
  };

  return (
    <>
      <Box className="work-container">
        <Typography className="skip" onClick={() => handleOpen()}>
          Skip
        </Typography>
        <Box>
          <Typography className="step">Step 1 of 3</Typography>
          <Typography variant="h2" className="basic-info">
            Basic Information
          </Typography>
        </Box>

        <Box className="profile-progress-box">
          <Typography className="profile-title">Profile Milestone</Typography>
          <Box>
            <Box className="profile-progress-bar">
              <Box className="progress-linebar"></Box>
              <Typography className="profile-txt">
                Complete your profile to connect with patients{" "}
              </Typography>
            </Box>
          </Box>
          <Box className="profile-percentage">
            <Typography>10%</Typography>
          </Box>
        </Box>

        <Box className="avatar-box">
          <Box>
            {uploadedFile ? (
              <img className="avatar-img" src={uploadedFile} alt="Avatar" />
            ) : (
              <img className="avatar-img" src={Avatar} alt="Avatar" />
            )}
          </Box>
          <Box>
            <Box>
              <Button
                onClick={handleFileButtonClick}
                className="avatar-btn"
                variant="contained"
              >
                Upload Your Avatar
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </Box>
            <Box>
              <Typography variant="body2" className="avatar-txt" gutterBottom>
                Your avatar should be a friendly and inviting headshot. Clearly
                identifiable as you.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="birthday-box">
          <Box>
            <FormLabel className="birthday-txt">Birthday</FormLabel>
            <TextField type="date" className="birthday-field"></TextField>
          </Box>
        </Box>

        <Box className="state-container">
          <Box>
            <FormLabel className="state">State</FormLabel>
            <Select
              
              defaultValue="select"
              className="state-field"
            >
              <MenuItem value="select">Select</MenuItem>
              <hr />
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <hr />
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <hr />
              <MenuItem value="Diu">Diu</MenuItem>
            </Select>
          </Box>
          <Box>
            <FormLabel className="city">City</FormLabel>
            <TextField select defaultValue="select" className="city-field">
              <MenuItem value="select">Select</MenuItem>
              <hr />
              <MenuItem value="Diu">Diu</MenuItem>
              <hr />
              <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
              <hr />
              <MenuItem value="Pune">Pune</MenuItem>
            </TextField>
          </Box>
        </Box>

        <Box className="gender-box">
          <FormLabel className="gender">Gender</FormLabel>
          <Box className="gender-field">
            <Box className="gender-text-field" onClick={handleGenderClick}>
              {showSecondImage ? (
                <img src={male2} className="male-box2" alt="Male" />
              ) : (
                <img src={male} className="male-box" alt="Male" />
              )}
              <FormLabel className="male-txt">Male</FormLabel>
            </Box>
            <Box className="gender-text-field" onClick={handleGenderClick}>
              {showSecondImage ? (
                <img src={Female2} className="female-box2" alt="Female" />
              ) : (
                <img src={Female} className="female-box" alt="Female" />
              )}
              <FormLabel className="female-txt">Female</FormLabel>
            </Box>
          </Box>
        </Box>
        <Box>
          <NavLink to="/step2">
            <Button variant="contained" className="continue-button">
              Continue
            </Button>
          </NavLink>
        </Box>
      </Box>
      {open && <SkipPopUp open={open} handleClose={handleClose} />}
    </>
  );
};

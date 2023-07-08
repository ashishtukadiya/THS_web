import "../../assets/CSS/WorkDetail2.css";
import React, { useState } from "react";
import {
  Box,
  FormLabel,
  TextField,
  Typography,
  Chip,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";
import SkipPopUp from "./Modal/SkipPopUp";

export const Step2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageSelect = (event) => {
    const language = event.target.value;
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  const handleLanguageRemove = (language) => {
    const updatedLanguages = selectedLanguages.filter(
      (lang) => lang !== language
    );
    setSelectedLanguages(updatedLanguages);
  };

  return (
    <>
      <Box className="work-container">
        <Typography onClick={() => handleOpen()} className="skip">
          Skip
        </Typography>
        <Box>
          <Typography className="step">Step 2 of 3</Typography>
          <Typography variant="h2" className="basic-info">
            Your Work Profile
          </Typography>
        </Box>

        <Box className="profile-progress-box">
          <Typography className="profile-title">Profile Milestone</Typography>
          <Box>
            <Box className="profile-progress-bar">
              <Box className="progress-linebar"></Box>
              <Typography className="profile-txt">
                Complete your profile for connect with patients{" "}
              </Typography>
            </Box>
          </Box>
          <Box className="profile-percentage">
            <Typography>10%</Typography>
          </Box>
        </Box>
        <Box className="speciality-box">
          <Box>
            <FormLabel className="speciality">Your Speciality*</FormLabel>
            <TextField
              select
              defaultValue="select"
              className="speciality-field"
            >
              <MenuItem value="select">Select</MenuItem>
              <hr className="hr"/>
              <MenuItem value="Artist">Artist</MenuItem>
              <hr className="hr"/>
              <MenuItem value="VFX Designer">Vfx</MenuItem>
              <hr className="hr"/>
              <MenuItem value="Cinematogapher">Cinema</MenuItem>
            </TextField>
          </Box>
        </Box>

        <Box className="sub-speciality-box">
          <FormLabel className="sub-speciality">Sub Speciality*</FormLabel>
          <TextField select defaultValue="select" className="speciality-field">
            <MenuItem value="select">Select</MenuItem>
            <hr className="hr"/>
            <MenuItem value="Artist">Artist</MenuItem>
            <hr className="hr"/>
            <MenuItem value="VFX Designer">Vfx</MenuItem>
            <hr className="hr"/>
            <MenuItem value="Cinematogapher">Cinema</MenuItem>
          </TextField>
        </Box>

        <Box className="your-experience-box">
          <Box>
            <FormLabel className="your-experience">
              Registration Number
            </FormLabel>
            <TextField className="speciality-field"></TextField>
          </Box>
        </Box>

        <Box className="language-box">
          <Box>
            <FormLabel className="language">Language</FormLabel>
            <Select
              className="speciality-field"
              select
              onChange={handleLanguageSelect}
              defaultValue="search"
            >
              <MenuItem value="search" >Search</MenuItem>
              <hr className="hr"/>
              <MenuItem value="english">English</MenuItem>
              <hr className="hr"/>
              <MenuItem value="spanish">Spanish</MenuItem>
              <hr className="hr"/>
              <MenuItem value="french">French</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box className="language-display">
          <Box>
            {selectedLanguages.map((language) => (
              <Chip
                key={language}
                className="language-show-english"
                onDelete={() => handleLanguageRemove(language)}
                deleteIcon={<CloseIcon />}
                variant="outlined"
                value={language}
                label={language}
              />
            ))}
          </Box>
        </Box>

        <Box className="back-Btn">
          <NavLink to="/">
            <Button variant="contained" className="back-btn">
              Back
            </Button>
          </NavLink>
          <NavLink to="/step3">
            <Button variant="contained" className="continue-btn">
              Continue
            </Button>
          </NavLink>
        </Box>
      </Box>
      {open && <SkipPopUp open={open} handleClose={handleClose} />}
    </>
  );
};

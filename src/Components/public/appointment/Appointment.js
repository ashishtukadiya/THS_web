import React, { useState } from "react";
import "../../assets/CSS/Requiment1.css";
import { NavLink, useNavigate } from "react-router-dom";
import FeesCardModal from "./FeesCardModal";
import SkipPopup from "./SkipPopup";

import {
  Box,
  FormLabel,
  TextField,
  Typography,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export const Appointment = () => {
  const [showTimeField, setShowTimeField] = useState(false);
  const [removeBtnText, setRemoveBtnText] = useState("+");
  const [showWeekdays, setShowWeekdays] = useState(false);
  const [showWeekends, setShowWeekends] = useState(false);

  const [openSkip, setOpenSkip] = useState(false);
  const [openFeesCard, setOpenFeesCard] = useState(false);
  const handleOpenSkip = () => {
    setOpenSkip(true);
  };

  const handleCloseSkip = () => {
    setOpenSkip(false);
  };

  const handleOpenFeesCard = () => {
    setOpenFeesCard(true);
  };

  const handleCloseFeesCard = () => {
    setOpenFeesCard(false);
  };

  const handleToggleWeekdays = () => {
    setShowWeekdays(!showWeekdays);
    setShowWeekends(false); // Hide weekends when weekdays are shown
  };

  const handleToggleWeekends = () => {
    setShowWeekdays(false); // Hide weekdays when weekends are shown
    setShowWeekends(!showWeekends);
  };

  const handleShowTimeField = (timeSlot) => {
    setShowTimeField(timeSlot);
    setShowTimeField(!showTimeField);

    setRemoveBtnText(showTimeField ? "+" : "-");
    const buttons = document.getElementsByClassName(`time-button ${timeSlot}`);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("active");
    }
  };

  return (
    <>
      <Box className="work-container">
        <Typography
          className="skip"
          onClick={handleOpenSkip}
          style={{ cursor: "pointer" }}
        >
          Skip
        </Typography>
        <Box>
          <Typography className="step">Step 1 of 2</Typography>
          <Typography variant="h2" className="basic-info">
            Doctor Availbility and Fees
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
          <Box className="Name" sx={{ marginRight: "8px" }}>
            <FormLabel className="specialit">Consultation Fees (Rs)</FormLabel>
            <TextField
              placeholder="500"
              className="speciality-field"
              sx={{ width: "330px" }}
            ></TextField>
          </Box>
          <Button
            variant="contained"
            className="back-bt"
            onClick={handleOpenFeesCard}
            style={{ color: "#3093BB" }}
          >
            Fee Card
          </Button>
        </Box>

        <Box className="">
          <Typography variant="h6" className="text">
            You will get 70% of the consultation fees and 30% is THS Platform
            fees
          </Typography>
        </Box>

        <Box className="underline">
          <Divider />
        </Box>
        <Box>
          <Typography variant="h6" className="time">
            Online Time Slote Managment
          </Typography>
        </Box>
        <Box className="weekend">
          <Typography
            variant="h6"
            className={`weak1 ${showWeekdays ? "active" : ""}`}
            onClick={handleToggleWeekdays}
            style={{ cursor: "pointer" }}
          >
            Weekdays
          </Typography>
          <Typography
            variant="h6"
            className={`weak2 ${showWeekends ? "active" : ""}`}
            onClick={handleToggleWeekends}
            style={{ cursor: "pointer" }}
          >
            Weekends
          </Typography>
        </Box>
        {showWeekdays && (
          <Box className="day-button">
            <Button
              className="S1-day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              S
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              M
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              T
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              W
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              T
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              F
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              S
            </Button>
          </Box>
        )}
        {showWeekends && (
          <Box className="day2-btn">
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              S
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              M
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              T
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              W
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              T
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#FFF", color: "#9393AA" }}
            >
              F
            </Button>
            <Button
              className="day"
              variant="contained"
              style={{ backgroundColor: "#3093BB" }}
            >
              S
            </Button>
          </Box>
        )}

        <Box>
          <Box className="day-time">
            <Typography variant="h6" className="day-shift morning">
              Morning
            </Typography>
            <Button
              variant="outline"
              color="red"
              className="remove-btn"
              onClick={() => handleShowTimeField("morning")}
            >
              {removeBtnText}
            </Button>
            <Box className="time-layout">
              {showTimeField && (
                <>
                  <FormLabel className="st-time">Start at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="08:30"
                    InputLabelProps={{ shrink: true }}
                    sx={{ width: "151px", height: "48px" }}
                  >
                    start time
                  </TextField>
                  <FormLabel className="st-time">End at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="11:00"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </>
              )}
            </Box>
          </Box>
          <Box className="day-time">
            <Typography variant="h6" className="morning">
              Afternoon
            </Typography>
            <Button
              variant="outline"
              color="red"
              className="remove-btn"
              onClick={() => handleShowTimeField("afternoon")}
            >
              {removeBtnText}
            </Button>
            <Box className="time-layout">
              {showTimeField && (
                <>
                  <FormLabel className="st-time">Start at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="12:00"
                    InputLabelProps={{ shrink: true }}
                  >
                    start time
                  </TextField>
                  <FormLabel className="st-time">End at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="16:00"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </>
              )}
            </Box>
          </Box>
          <Box className="day-time">
            <Typography variant="h6" className="morning">
              Evening
            </Typography>
            <Button
              variant="outline"
              color="red"
              className="remove-btn"
              onClick={() => handleShowTimeField("evening")}
            >
              {removeBtnText}
            </Button>
            <Box className="time-layout">
              {showTimeField && (
                <>
                  <FormLabel className="st-time">Start at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="17:00"
                    InputLabelProps={{ shrink: true }}
                  >
                    start time
                  </TextField>
                  <FormLabel className="st-time">End at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="21:00"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </>
              )}
            </Box>
          </Box>
          <Box className="day-time">
            <Typography variant="h6" className="morning">
              Night
            </Typography>
            <Button
              variant="outline"
              color="red"
              className="remove-btn"
              onClick={() => handleShowTimeField("night")}
            >
              {removeBtnText}
            </Button>
            <Box className="time-layout">
              {showTimeField && (
                <>
                  <FormLabel className="st-time">Start at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="22:00"
                    InputLabelProps={{ shrink: true }}
                  >
                    start time
                  </TextField>
                  <FormLabel className="st-time">End at</FormLabel>
                  <TextField
                    className="m1"
                    type="time"
                    defaultValue="00:00"
                    InputLabelProps={{ shrink: true }}
                  ></TextField>
                </>
              )}
            </Box>
          </Box>
        </Box>

        <Box className="m5">
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Emergency calls"
            className="em-call"
          />
        </Box>
        <Box className="">
          {/* <NavLink to="/step3"> */}
          <Button variant="contained" className="continue-bt">
            continue
          </Button>
          {/* </NavLink> */}
        </Box>
      </Box>
      {openSkip && <SkipPopup open={openSkip} handleClose={handleCloseSkip} />}
      {openFeesCard && (
        <FeesCardModal open={openFeesCard} handleClose={handleCloseFeesCard} />
      )}
    </>
  );
};

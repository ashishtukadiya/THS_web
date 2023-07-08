import "../UserSettings/TimeSlot.css";
import Edit from "../../assets/svg/edit.svg";
import {
  Box,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
  FormLabel,
  Checkbox,
  Button,
} from "@mui/material";
import React, { useState } from "react";

export default function TimeSlot() {
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
  };

  return (
    <>
      <Box className="highlight-box">
        <Box className="highlight-line"></Box>
        <Typography className="time-slot-title">Time Slot & Fees</Typography>
        <Box className="edit-box">
          <img src={Edit} alt="" />
          <Typography className="edit-text">Edit</Typography>
        </Box>
      </Box>
      <Divider className="sub-divider" />
      <Box className="fee-box">
        <Typography className="consultation-fee-title">
          Consultation Fee (Rs)
        </Typography>
        <TextField
          variant="outlined"
          className="fee-number-box"
          defaultValue={500}
        ></TextField>
        <Typography className="evaluation">
          You will get net Rs. 400 after THS charge 10% + GST 18% deduction.
        </Typography>
      </Box>
      <Divider className="fee-divider" />
      <Box className="slot-box">
        <Box className="slot-line"></Box>
        <Typography className="online-slot-title">
          Online Time Slot Management
        </Typography>
      </Box>



      <Box className="week-schedule">
        <Typography
          variant="h6"
          className={`week-days ${showWeekdays ? "active" : ""}`}
          onClick={handleToggleWeekdays}
          style={{ cursor: "pointer" }}
        >
          Weekdays
        </Typography>
        <Typography
          variant="h6"
          className={`week-ends ${showWeekends ? "active" : ""}`}
          onClick={handleToggleWeekends}
          style={{ cursor: "pointer" }}
        >
          Weekends
        </Typography>
      </Box>
      {showWeekdays && (
        <Box className="weekdays-btn">
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
        <Box className="weekdays-btn">
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
      <Box className="m5">
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Emergency calls"
          className="em-call"
        />
      </Box>
    </>
  );
}

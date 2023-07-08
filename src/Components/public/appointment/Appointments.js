import {
  Typography,
  Box,
  FormLabel,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import "../CSS/Step3.css";

const Requiment_2 = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [ifscCode, setIFSCCode] = useState("");
  const [accountNumberError, setAccountNumberError] = useState(false);
  const handleAccountNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setAccountNumber(value);
    setAccountNumberError(false);
  };
  const handleConfirmAccountNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    setConfirmAccountNumber(value);
    setAccountNumberError(false);
  };
  const handleIFSCCodeChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // Accepts only numbers, removes non-numeric characters
    setIFSCCode(value);
  };
  const handleSubmit = () => {
    if (accountNumber !== confirmAccountNumber) {
      setAccountNumberError(true);
      return;
    }
  };

  return (
    <>
      <Box className="work-container">
        <Typography className="skip">Skip</Typography>
        <Box>
          <Typography className="step">Step 2 of 2</Typography>
          <Typography variant="h2" className="basic-info">
            Bank Details
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
            <FormLabel className="speciality">Account Holder Name*</FormLabel>
            <TextField className="speciality-field"></TextField>
          </Box>
        </Box>

        <Box className="sub-speciality-box">
          <FormLabel className="sub-speciality">Account Number*</FormLabel>
          <TextField
            value={accountNumber}
            onChange={handleAccountNumberChange}
            error={accountNumberError}
            helperText={accountNumberError && "Account numbers do not match"}
            className="speciality-field"
            inputProps={{ inputMode: "numeric" }}
          ></TextField>
        </Box>

        <Box className="your-experience-box">
          <Box>
            <FormLabel className="your-experience">
              Confirm Account Number
            </FormLabel>
            <TextField
              className="speciality-field"
              value={confirmAccountNumber}
              onChange={handleConfirmAccountNumberChange}
              error={accountNumberError}
              helperText={accountNumberError && "Account numbers do not match"}
              inputProps={{ inputMode: "numeric" }}
            ></TextField>
          </Box>
        </Box>

        <Box className="language-box">
          <Box>
            <FormLabel className="language">IFSC Code*</FormLabel>
            <TextField
              className="speciality-field"
              value={ifscCode}
              onChange={handleIFSCCodeChange}
              inputProps={{ inputMode: "numeric" }}
            ></TextField>
          </Box>
        </Box>
        <Box className="underline">
          <Divider />
        </Box>
        <Box>
          <Typography variant="h6" className="time">
            UPI
          </Typography>
        </Box>
        <Box>
          <FormLabel className="language">UPI ID</FormLabel>
          <TextField className="speciality-field"></TextField>
        </Box>

        <Box className="back-Btn">
          <Button variant="contained" className="back-btn">
            Back
          </Button>

          <Button
            variant="contained"
            className="continue-btn"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Requiment_2;

import "../../assets/CSS/WorkDetail3.css";
import React, { useState, useRef } from "react";
import QualificationImg from "../../assets/Images/QualificationImg.svg";
import Pin from "../../assets/Images/Pin.svg";
import SkipPopUp from "./Modal/SkipPopUp";
import { WorkDetailDone } from "./Modal/WorkDetailDone";
import {
  Box,
  Typography,
  FormLabel,
  Button,
  Divider,
  Select,
  MenuItem,
  TextField,
  Grid,
} from "@mui/material";

import { NavLink } from "react-router-dom";

export const Step3 = () => {
  const [open, setOpen] = useState(false);
  const [fopen , setFopen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleFopen =() => setFopen(true);
  const handleFclose = () => setFopen(false);
  const handleClose = () => setOpen(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedDocument, setSelectedDocument] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [signatureImage, setSignatureImage] = useState(null);

  const handleOptionSelect = (event) => {
    const selectedOption = event.target.value;
    if (!selectedOptions.includes(selectedOption)) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        selectedOption,
      ]);
    }
  };

  const handleImageUpload = (event, option) => {
    const file = event.target.files[0];
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [option]: {
        url: URL.createObjectURL(file),
        name: file.name,
      },
    }));
  };

  const handleDeleteImage = (option) => {
    setSelectedImages((prevSelectedImages) => {
      const updatedImages = { ...prevSelectedImages };
      delete updatedImages[option];
      return updatedImages;
    });
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = prevSelectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
      return updatedOptions;
    });
    setSelectedImages((prevSelectedImages) => {
      const updatedImages = { ...prevSelectedImages };
      delete updatedImages[option];
      return updatedImages;
    });
  };

  const handleDocumentSelect = (event) => {
    setSelectedDocument(event.target.value);
    setFrontImage(null);
    setBackImage(null);
  };

  const handleFrontImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontImage({
      url: URL.createObjectURL(file),
      name: file.name,
    });
  };

  const handleBackImageUpload = (event) => {
    const file = event.target.files[0];
    setBackImage({
      url: URL.createObjectURL(file),
      name: file.name,
    });
  };

  const handleDeleteFrontImage = () => {
    setFrontImage(null);
  };

  const handleDeleteBackImage = () => {
    setBackImage(null);
  };

  const handleSignatureImageUpload = (event) => {
    const file = event.target.files[0];
    setSignatureImage({
      url: URL.createObjectURL(file),
      name: file.name,
    });
  };

  const handleDeleteSignatureImage = () => {
    setSignatureImage(null);
  };
  return (
    <>
      <Box className="work-container">
        <Typography onClick={() => handleOpen()} className="skip">
          Skip
        </Typography>
        <Box>
          <Typography className="step">Step 3 of 3</Typography>
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

        <Box className="qualification-box">
          <Box>
            <FormLabel className="qualification">Qualification</FormLabel>
            <TextField
              select
              defaultValue="search"
              onChange={handleOptionSelect}
              className="qualification-field"
            >
              <MenuItem value="search">Search</MenuItem>
              <MenuItem value="MBBS">MBBS</MenuItem>
              <MenuItem value="MD">MD</MenuItem>
              <MenuItem value="Dentist">Dentist</MenuItem>
            </TextField>
          </Box>
          <Box>
            <Typography className="add-qualification-txt">
              Added Qualifications
            </Typography>
          </Box>
        </Box>

        <Box>
          {selectedOptions.map((option) => (
            <Box key={option} className="mbbs-box">
              <Typography>
                {option}
                <Typography
                  onClick={() => handleRemoveOption(option)}
                  className="remove"
                >
                  Remove
                </Typography>
              </Typography>
              <Box>
                {selectedImages && selectedImages[option] ? (
                  <Box>
                    <Grid container spacing={2}>
                      <Grid >
                        <Box className="qualification-img-box">
                          <Box>
                            <img
                              className="qualification-img"
                              src={selectedImages[option].url}
                              alt="Certificate"
                            />
                          </Box>
                        </Box>
                      </Grid>
                      <Grid >
                        <Box className="url-text">
                          <Typography className="certificate-txt">
                            {selectedImages[option].name}{" "}
                          </Typography>
                          <Typography
                            className="delete-img"
                            onClick={() => handleDeleteImage(option)}
                          >
                            Delete Photo
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <Box>
                    <Button
                      variant="contained"
                      component="label"
                      className="attached-file-btn"
                    >
                      <img src={Pin} className="pin-icon" alt="Pin" />
                      Attach Certification
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(event) => handleImageUpload(event, option)}
                      />
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Box>
          <Divider className="hr-line" />
        </Box>

        <Box>
          <Typography className="proof-txt">
            Upload ID Proof Document
          </Typography>
        </Box>

        <Box className="select-document-box">
          <FormLabel className="select-document-txt">Select Document</FormLabel>
          <TextField
            select
            className="qualification-field"
            onChange={handleDocumentSelect}
            defaultValue="select"
          >
            <MenuItem value="select">Select ID Proof</MenuItem>
            <MenuItem value="Aadhar">Aadhar card</MenuItem>
            <MenuItem value="Pan">Pan card</MenuItem>
          </TextField>
        </Box>

        {selectedDocument && (
          <Box>
            <Box className="aadhar-box">
              <Typography className="aadhar-qualification">
                {selectedDocument} (Front side)
              </Typography>
              {frontImage ? (
                <Box className="aadhar-img-box">
                  <img
                    src={frontImage.url}
                    className="qualification-img"
                    alt={`${selectedDocument} Front`}
                  />
                </Box>
              ) : (
                <Box>
                  <Button
                    variant="contained"
                    component="label"
                    className="aadhar-file-btn"
                  >
                    <img src={Pin} className="pin-icon" alt="Pin" />
                    Attach File
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFrontImageUpload}
                    />
                  </Button>
                </Box>
              )}

              {frontImage && (
                <Typography className="aadhar-certificate-txt">
                  {frontImage.name}
                  <Typography
                    className="delete-img"
                    onClick={handleDeleteFrontImage}
                  >
                    Delete Photo
                  </Typography>
                </Typography>
              )}
            </Box>

            <Box className="aadhar-back-box">
              <Typography className="aadhar-txt">
                {selectedDocument} (Back side)
              </Typography>
              {backImage ? (
                <Box className="aadhar-img-box">
                  <img
                    src={backImage.url}
                    className="qualification-img"
                    alt={`${selectedDocument} Back`}
                  />
                </Box>
              ) : (
                <Box>
                  <Button
                    variant="contained"
                    component="label"
                    className="aadhar-file-btn"
                  >
                    <img src={Pin} className="pin-icon" alt="Pin" />
                    Attach File
                    <input
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleBackImageUpload}
                    />
                  </Button>
                </Box>
              )}

              {backImage && (
                <Typography className="aadhar-certificate-txt">
                  {backImage.name}
                  <Typography
                    className="delete-img"
                    onClick={handleDeleteBackImage}
                  >
                    Delete Photo
                  </Typography>
                </Typography>
              )}
            </Box>
          </Box>
        )}

        <Box className="hr-line">
          <Divider  />
        </Box>

        <Box className="signature-box">
          <Typography className="aadhar-txt">Upload Signature</Typography>

          {/* <Box>
            <Button variant="contained" className="signature-file-btn">
              <img src={Pin} className="pin-icon" />
              Attach File
            </Button>
            <input type="file" style={{ display: "none" }} />
          </Box> */}
          <Box>
            {signatureImage ? (
              <Box className="aadhar-certificate-txt">
                <img
                  src={signatureImage.url}
                  className="signature-img"
                  alt="Signature"
                />
                <Typography className="signature-name">
                  {signatureImage.name}
                  <Typography
                    className="delete-img"
                    onClick={handleDeleteSignatureImage}
                  >
                    Delete Photo
                  </Typography>
                </Typography>
              </Box>
            ) : (
              <Box>
                <Button
                  variant="contained"
                  component="label"
                  className="signature-file-btn"
                >
                  <img src={Pin} className="pin-icon" alt="Pin" />
                  Attach File
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleSignatureImageUpload}
                  />
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        <Box className="back-Btn">
          <NavLink to="/step2">
            <Button variant="contained" className="back-btn">
              Back
            </Button>
          </NavLink>
          <Button
            variant="contained"
            className="submit-btn"
            onClick={() => handleFopen()}
          >
            Submit
          </Button>
        </Box>
      </Box>
      {fopen && <WorkDetailDone fopen={fopen} handleFclose={handleFclose} />}
      {open && <SkipPopUp open={open} handleClose={handleClose} />}
    </>
  );
};

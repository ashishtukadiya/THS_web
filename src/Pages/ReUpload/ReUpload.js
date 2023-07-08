import "../ReUpload/ReUpload.css";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function ReUpload() {
  return (
    <>
      <Box>
        <Typography variant="h1" className="reupload-title">
          Reupload Required Details
        </Typography>
      </Box>
      <Box className="rectangle-box"></Box>
    </>
  );
}

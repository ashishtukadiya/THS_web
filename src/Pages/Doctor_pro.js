import { Box, Typography } from "@mui/material";
import React from "react";

const Doctor_pro = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box className="DOC_profile">
        <Typography className="profile-skip">Skip</Typography>
        <Box>
          <Typography className="profile-setp">Setp 1 of 3</Typography>
          <Typography variant="h2" className="profile-info">
            Basic Information
          </Typography>
        </Box>
        <Box className="profile-milestone row">
          <Typography className="profile-mile-text">
            Profile Milestone
          </Typography>
          <Box className="profile-progressBar">
            <Box className="profile-progress">
              <Box className="progressBar"></Box>
            </Box>
            <Typography className="profile-desc">
              Complete your profile for connect with patients{" "}
            </Typography>
          </Box>
          <Box className="profile-result">
            <Typography>10%</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Doctor_pro;

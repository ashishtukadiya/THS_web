import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import phone from "../assets/Images/Phone.svg"
import React from "react";

const Consultation = () => {
  return (
    <>
      <Box className="THS-consultation">
        <Typography className="consultation-title">
          Upcoming Consultations
        </Typography>
        <Box className="consultation-card">
          <Card>
            <CardContent className="card-content">
              <Box className="consultation-details">
                <Box className="card-list">
                  <Typography variant="h6" className="text-color fonts-detail">
                    ID #13111331
                  </Typography>

                  <Box className="consultation-list" sx={{ display: "flex" }}>
                    <Typography variant="h6" className="name font-detail">
                      Juli
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text text-color fonts-detail"
                    >
                      23 | F
                    </Typography>
                    <Typography className="time fonts-detail">
                      10 mint left
                    </Typography>{" "}
                  </Box>
                  <Typography variant="h6" className="date fonts-detail">
                    11 Apr, 2022 - 11:00 am
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography variant="h6" className="name font-detail">
                      Juli
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text text-color fonts-detail"
                    >
                      23 | F
                    </Typography>
                    <Button>Mark Complete</Button>
                    <img src={phone}/>
                  </Box>
                  <Typography variant="h6" className="text-color fonts-detail">
                    Online
                  </Typography>
                  <Box>hello</Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default Consultation;

import React, { useState } from "react";
import {
  Box,
  Modal,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import "../../assests/CSS/FeesModal.css";
import close from "../../assests/Images/Close.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",

  p: 4,
};
export default function FeesCardModal({ open, handleClose }) {
  return (
    <>
      <Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="modal-container">
            <Box className="mark" onClick={handleClose}>
              <img src={close} className="mark-close" alt="cloaseicone" />
            </Box>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className=""
            >
              Fees Card
            </Typography>

            <Box className="table">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="table-header-cell">
                      Speciality
                    </TableCell>
                    <TableCell className="table-header-cell">
                      Consultation Fee (Rs)
                    </TableCell>
                    <TableCell className="table-header-cell">
                      Follow Up fees (Rs)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>MBBS</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>350</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BDS</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>350</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BAMS</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>350</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BUMS</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>350</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BHMS</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>350</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BYNS</TableCell>
                    <TableCell>600</TableCell>
                    <TableCell>450</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dermatology</TableCell>
                    <TableCell>600</TableCell>
                    <TableCell>450</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ear, Nose and Throat</TableCell>
                    <TableCell>700</TableCell>
                    <TableCell>550</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Obtetrics and Gynaecology</TableCell>
                    <TableCell>700</TableCell>
                    <TableCell>550</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Orthopaedics</TableCell>
                    <TableCell>700</TableCell>
                    <TableCell>550</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pediatruc</TableCell>
                    <TableCell>700</TableCell>
                    <TableCell>550</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
}

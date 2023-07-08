import "../CancelPopup/CancelPopup.css";
import {
  Box,
  Modal,
  Typography,
  Button,
  Checkbox,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 422,
  height: 524,
  "border-radius": "16px",
  boxShadow: 24,
  p: 4,
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CancelPopup({ open, handleClose }) {
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState("");
  const textLimit = 150;

  function onChange(reason) {
    setSelected((prev) => (reason === prev ? null : reason));
  }

  function handleNoteChange(event) {
    const inputText = event.target.value;
    const truncatedText = inputText.slice(0, textLimit);
    setNote(truncatedText);
  }

  const remainingCharacters = textLimit - note.length;

  return (
    <>
      <Box>
        <Box>
          <Modal
            className="cancel-popup-body"
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="cancel-popup-box" sx={style}>
              <Box>
                <Typography className="cancel-title">
                  Tell us the Reason
                </Typography>
              </Box>
              <Box className="cancel-checkbox-container1">
                <Checkbox
                  {...label}
                  className="cancel-checkbox"
                  checked={1 === selected}
                  onChange={() => onChange(1)}
                />
                <Typography className="cancel-reason">
                  The question is'nt my specialty
                </Typography>
              </Box>
              <Box className="cancel-checkbox-container2">
                <Checkbox
                  {...label}
                  className="cancel-checkbox"
                  checked={2 === selected}
                  onChange={() => onChange(2)}
                />
                <Typography className="cancel-reason">
                  The patient behaves inappropriately
                </Typography>
              </Box>
              <Box className="cancel-checkbox-container2">
                <Checkbox
                  {...label}
                  className="cancel-checkbox"
                  checked={3 === selected}
                  onChange={() => onChange(3)}
                />
                <Typography className="cancel-reason">
                  The patient behaves inappropriately
                </Typography>
              </Box>
              <Box className="cancel-checkbox-container2">
                <Checkbox
                  {...label}
                  className="cancel-checkbox"
                  checked={4 === selected}
                  onChange={() => onChange(4)}
                />
                <Typography className="cancel-reason">Other</Typography>
              </Box>
              <Box>
                <Typography className="optional-note">Optional Note</Typography>
                <TextField
                  id="outlined-multiline-static"
                  className="cancel-text-field"
                  multiline
                  rows={4}
                  value={note}
                  onChange={handleNoteChange}
                  inputProps={{ maxLength: textLimit }}
                />
                <Typography className="text-limit"> {remainingCharacters}/{textLimit}</Typography>
              </Box>
              <Box>
                <Button className="cancel-popup-btn" onClick={handleClose}>
                  <Typography className="cancel-popup-text">Cancel</Typography>
                </Button>
                <Button className="submit-popup-btn">
                  <Typography className="submit-popup-text">Submit</Typography>
                </Button>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Box>
    </>
  );
}

import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import "../assests/CSS/Medicine.css";
import SerchIcon from "../assests/Images/Serch.svg";

export default function Medicine() {
  const [medicineList, setMedicineList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchClick = () => {
    setTimeout(() => {
      const dummyMedicineList = [
        { id: 1, name: "Medicine 1" },
        { id: 2, name: "Medicine 2" },
        { id: 3, name: "Medicine 3" },
      ];
      setMedicineList(dummyMedicineList);
    }, 1000);
  };
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Box className="medi-box">
        <Box className="medi-line"></Box>
        <Typography className="medi-title">Medicines</Typography>
      </Box>
      <Box className="medicine">
        <Typography className="t">Add Medicine:</Typography>
      </Box>
      <Box>
        <TextField
          type="serch"
          className="serch-text"
          value={searchQuery}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <img src={SerchIcon} alt="serch" className="serch-icone" onClick={handleSearchClick}/>
            ),
          }}
        ></TextField>
      </Box>
      {medicineList.length > 0 && (
        <Box className="medicine-list">
          <Typography variant="subtitle1">Search Results:</Typography>
          {medicineList.map((medicine) => (
            <Typography key={medicine.id}>{medicine.name}</Typography>
          ))}
        </Box>
      )}
    </>
  );
}

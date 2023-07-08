import React from "react";
import Navbar from "../../private/Dashboard/Navbar/Navbar";
import Header from "../../private/Dashboard/Header/Header";

const Home = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>
        {children}
      </Box>
    </>
  );
};

export default Home;

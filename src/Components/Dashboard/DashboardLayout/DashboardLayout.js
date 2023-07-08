import "../DashboardLayout/DashboardLayout.css";
import { Container } from "@mui/material";
import React from "react";
import WelcomeDashboard from "../../../Pages/WelcomePage/WelcomeDashboard";
import WarningDashboard from "../../../Pages/WarningPage/WarningDashboard";
import VerifyHold from "../../../Pages/VerifyHold/VerifyHold";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Settings from "../../../Pages/UserSettings/Settings";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="background-body">
        <Navbar />
        {/* <Header /> */}

        <Container className="container-content">
          <Settings />
          {/* <WarningDashboard /> */}
          {/* <VerifyHold /> */}
          {/* <WelcomeDashboard /> */}
        </Container>
      </div>
    </>
  );
}

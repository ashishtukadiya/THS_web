import React from "react";
import { Route, Routes } from "react-router";
import WelcomeDashboard from "../Components/private/Dashboard/DashBoard";
import WarningDashboard from "../Pages/WarningPage/WarningDashboard";
import Home from "../Components/common/Home/Home";

function PrivateRoutes() {
  return (
    <Home>
      <Routes>
        <Route path="/welcome_dashboard" Component={WelcomeDashboard}></Route>
        <Route path="/warning" Component={WarningDashboard} />

        {/* <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Requiment_1 />} />
        <Route path="/step5" element={<Requiment_2 />} /> */}
      </Routes>
    </Home>
  );
}

export default PrivateRoutes;

{
  /* <Route path="reupload" Component={ReUpload}></Route> */
  /* <Route path="verify" Component={VerifyHold}></Route> */
}

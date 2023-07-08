import "../Dropdown/Dropdown.css";
import Profile from "../../../assets/svg/MyProfile.svg";
import Settings from "../../../assets/svg/Settings.svg";
import Share from "../../../assets/svg/ShareLink.svg";
import Policy from "../../../assets/svg/Policy.svg";
import Conditions from "../../../assets/svg/Conditions.svg";
import Help from "../../../assets/svg/Help.svg";
import Logout from "../../../assets/svg/Logout.svg";
import {
  ListItemAvatar,
  ListItemText,
  ListItem,
  List,
  Divider,
} from "@mui/material";
import React from "react";
import "../../../assets/CSS/Dropdown.css";
import Profile from "../../../assets/svg/MyProfile.svg";
import Settings from "../../../assets/svg/Settings.svg";
import Share from "../../../assets/svg/ShareLink.svg";
import Policy from "../../../assets/svg/Policy.svg";
import Conditions from "../../../assets/svg/Conditions.svg";
import Help from "../../../assets/svg/Help.svg";
import Logout from "../../../assets/svg/Logout.svg";

export default function Dropdown() {
  return (
    <>
      <List className="dropdown-box">
        <ListItem>
          <ListItemAvatar>
            <img src={Profile} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText primary="My Profile" className="dropdown-text" />
        </ListItem>
        <Divider component="li" className="divider" />
        <ListItem>
          <ListItemAvatar>
            <img src={Settings} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText primary="Settings" className="dropdown-text" />
        </ListItem>
        <Divider component="li" className="divider" />
        <ListItem>
          <ListItemAvatar>
            <img src={Share} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText primary="Share your Link" className="dropdown-text" />
        </ListItem>
        <Divider component="li" className="divider" />
        <ListItem>
          <ListItemAvatar>
            <img src={Policy} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText primary="Privacy Policy" className="dropdown-text" />
        </ListItem>
        <Divider component="li" className="divider" />
        <ListItem>
          <ListItemAvatar>
            <img src={Conditions} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText
            primary="Terms and Conditions"
            className="dropdown-text"
          />
        </ListItem>
        <Divider component="li" className="divider" />
        <ListItem>
          <ListItemAvatar>
            <img src={Help} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText primary="Help & Support" className="dropdown-text" />
        </ListItem>
        <Divider component="li" className="divider" />
        <ListItem>
          <ListItemAvatar>
            <img src={Logout} alt="" className="dashboard-image" />
          </ListItemAvatar>
          <ListItemText primary="Log Out" className="dropdown-text" />
        </ListItem>
      </List>
    </>
  );
}

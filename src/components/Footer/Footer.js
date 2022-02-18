import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FooterLogo from "../Files/footer1.png";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  window.scrollTo(0, 0);
  return (
    <div>
      <BottomNavigation showLabels align="left">
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ m: 1 }}
          align="left"
        >
          <img noWrap sx={{ flexGrow: 1 }} src={FooterLogo} alt="logo"></img>
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ m: 1, mt: 2.1, ml: 0 }}
          variant="caption"
        >
          @All Rights Reserved.
        </Typography>
        <BottomNavigationAction label="Company" icon={<footerLogo />} />
        <BottomNavigationAction
          label="Contact"
          onClick={() => history.push("/Contact")}
        />
        <BottomNavigationAction label="Legal Mentioins" />
        <BottomNavigationAction icon={<FacebookIcon />} />
        <BottomNavigationAction icon={<TwitterIcon />} />
        <BottomNavigationAction icon={<InstagramIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default Footer;

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { HeaderProps } from "./Header.types";
import Logo from "../../Assets/Group 1000004673.svg";

const Header: React.FC<HeaderProps> = ({ name, phone }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <Typography variant="h6" noWrap component="div">
        <div className="logo">
          <img  src={Logo} alt="Logo"/>
        </div>
          Prachaar +
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Typography variant="body1" sx={{ marginLeft: 2 }}>
            {name} - {phone}
          </Typography>
          <Avatar sx={{ bgcolor: "grey", marginLeft: 2 }}>{name.charAt(0)}</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

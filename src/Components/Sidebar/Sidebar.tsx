import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { MenuItem } from "./Sidebar.types";

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem 
          key={index} 
          component="button"
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;

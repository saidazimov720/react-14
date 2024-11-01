import { SvgIconComponent } from "@mui/icons-material";
import { ImgHTMLAttributes } from "react";

export interface MenuItem {
  text: string;
  icon: React.ReactElement<SvgIconComponent>;
}

export interface SidebarProps {
  menuItems: MenuItem[];
}

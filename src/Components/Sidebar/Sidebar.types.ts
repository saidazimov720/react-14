import { SvgIconComponent } from "@mui/icons-material";

export interface MenuItem {
  text: string;
  icon: React.ReactElement<SvgIconComponent>;
}

export interface SidebarProps {
  menuItems: MenuItem[];
}

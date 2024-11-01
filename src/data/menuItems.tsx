import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ChatIcon from "@mui/icons-material/Chat";
import CampaignIcon from "@mui/icons-material/Campaign";
import { MenuItem } from "../Components/Sidebar/Sidebar.types";

const menuItems: MenuItem[] = [
  { text: "Home", icon: <HomeIcon/>},
  { text: "Contacts", icon: <ContactsIcon /> },
  { text: "Conversation", icon: <ChatIcon /> },
  { text: "Campgain", icon: <CampaignIcon /> },
];

export default menuItems;

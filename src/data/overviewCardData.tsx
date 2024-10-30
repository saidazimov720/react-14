
import { CheckCircle as CheckCircleIcon, Phone as PhoneIcon, Error as ErrorIcon } from "@mui/icons-material";
import { OverviewCardData } from "../types/types";

// const generateUniqueId = (() => {
//   let id = 0;
//   return () => id++;
// })();

export const overviewCardData: OverviewCardData[] = [
  {
    id: 2565,
    title: "Successful Campaign",
    value: 30,
    icon: <CheckCircleIcon />,
    color: "green",
  },
  {
    id: 6515,
    title: "Pending Campaign",
    value: 3,
    icon: <PhoneIcon />,
    color: "orange",
  },
  {
    id: 2543,
    title: "Failed Campaign",
    value: 0,
    icon: <ErrorIcon />,
    color: "red",
  },
];

export default overviewCardData;
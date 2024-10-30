import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./pages/Dashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C6B56",
    },
    background: {
      default: "#f4f5f7",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;

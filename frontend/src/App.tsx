import React from 'react';
import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {customTheme} from "./theme/customTheme";
import {Dashboard} from "./pages/dashboard";

function App() {
  return (
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
          <Dashboard></Dashboard>
      </ThemeProvider>
  );
}

export default App;

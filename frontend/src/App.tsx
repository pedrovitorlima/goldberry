import React from 'react';
import './App.css';
import {CssBaseline, styled, Switch, ThemeProvider} from "@mui/material";
import {customTheme} from "./theme/customTheme";
import {Expense} from "./pages/expense";
import {Menubar} from "./components/Menubar";
import {Router, Route, BrowserRouter, Routes} from "react-router-dom";

const FormContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>

        <FormContainer>
            <BrowserRouter>
                <Menubar />
                <FormContainer>
                    <Routes>
                        <Route path="/expense" element={<Expense />} />
                    </Routes>
                </FormContainer>
            </BrowserRouter>
        </FormContainer>

        <CssBaseline />

        {/*<Dashboard />*/}
    </ThemeProvider>
  );
}

export default App;

import React, {FC, ReactElement} from "react";
import {Grid} from "@mui/material";

export const SidebarArea: FC = (): ReactElement => {
    return (
        <Grid item md={4} sx={{
            height: '100vh',
            position: 'fixed',
            right: 0,
            top: 0,
            width: '100%',
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h2>sidebar area</h2>
        </Grid>
    );
}
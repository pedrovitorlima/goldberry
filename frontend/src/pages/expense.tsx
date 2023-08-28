import React, {FC, ReactElement} from "react";
import {Box, Grid, TextField} from "@mui/material";

export const Expense: FC = (): ReactElement => {
    return (
            <Box sx={{
                height: '100vh',
                right: 0,
                top: 0,
                width: '100%',
                backgroundColor: 'background.paper',
                display: 'flex',
                // justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

                <Grid>

                </Grid>
                <TextField id="outlined-basic" label="Value" variant="outlined" />


            </Box>
    );
}
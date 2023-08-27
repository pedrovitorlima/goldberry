import React, {FC, ReactElement} from "react";
import {Grid} from "@mui/material";
import {ContentArea} from "../components/ContentArea";
import {SidebarArea} from "../components/SidebarArea";

export const Dashboard: FC = (): ReactElement => {
    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            <ContentArea/>

            <SidebarArea/>
        </Grid>
    );
}
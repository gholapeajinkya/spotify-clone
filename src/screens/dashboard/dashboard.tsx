import { Grid, Typography } from '@mui/material';
import React from 'react';
import "./dashboard.css";

const Dashboard = () => {
    return (
        <Grid
            container
            justifyContent="center">
            <Grid
                item
                xs={12}>
                <Typography>
                    Listening is everything
                </Typography>
                <Typography variant="h6" align="center">Millions of songs and podcasts. No credit card needed.</Typography>
                <Grid
                    container
                    justifyContent="center">
                    <Grid
                        item
                        xs={12}>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard;

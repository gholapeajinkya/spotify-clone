import { Typography } from '@mui/material';
import React from 'react';

const Dashboard = () => {
    return (
       <Grid
            container
            justifyContent="center">
            <Grid
                item
                xs={12}
                justifyContent="center">
                <Typography variant="h1" align="center" >Listening is everything</Typography>
                <Typography variant="h6" align="center">Millions of songs and podcasts. No credit card needed.</Typography>
                <Button>
                    GET SPOTIFY FREE
                </Button>
            </Grid>
        </Grid>
    )
}

export default Dashboard;

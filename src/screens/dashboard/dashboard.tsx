import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../../components/customButton/customButton';
import useStyles from './dashboardCss';

const Dashboard = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            justifyContent="center">
            <Grid
                item
                xs={12}>
                <Typography
                    className={classes.bigTitle}
                >
                    Listening is everything
                </Typography>
                <Typography variant="h6" align="center">Millions of songs and podcasts. No credit card needed.</Typography>
                <Grid
                    container
                    justifyContent="center">
                    <Grid
                        item
                        xs={12}>
                        <CustomButton>
                            GET SPOTIFY FREE
                        </CustomButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Dashboard;
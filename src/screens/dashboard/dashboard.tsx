import { Grid, Typography } from '@mui/material';
import React from 'react';
import CustomButton from '../../components/customButton/customButton';
import Footer from '../../components/footer/footer';
import useStyles from './dashboardCss';

const Dashboard = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
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
            <Footer />
        </React.Fragment>
    )
}

export default Dashboard;

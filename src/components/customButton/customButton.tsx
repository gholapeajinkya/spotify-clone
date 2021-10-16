import React from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { colors } from '../../constants/colors';

const themeInstance = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const useStyles = makeStyles((theme: typeof themeInstance) => ({
    root: {
        background: colors.lightGreen,
        border: 0,
        fontSize: 16,
        borderRadius: 50,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: colors.blue,
        height: 48,
        padding: '0 30px',
    },
}));

export default function CustomButton(props: any) {

    const classes = useStyles();

    return (
        <ThemeProvider theme={themeInstance}>
            <button type="button" className={classes.root}>
                {props.children}
            </button>
        </ThemeProvider>
    );
}
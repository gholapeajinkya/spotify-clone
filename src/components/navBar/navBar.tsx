import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import logo from "../../assets/Spotify_Logo.png";
import useStyles from './navBarCss';
const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar
            position="static"
            style={{ backgroundColor: "#000" }}>
            <Toolbar
                style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "84px" }}>
                <div>
                    <img
                        width="160px"
                        height="50px"
                        src={logo} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                    <p>Premium</p>
                    <p>Support</p>
                    <p>Download</p>
                    <p>|</p>
                    <p>Sign up</p>
                    <p>Log in</p>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;

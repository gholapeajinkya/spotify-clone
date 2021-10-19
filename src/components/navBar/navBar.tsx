import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import logo from "../../assets/Spotify_Logo.png";
import "./navBar.css";

const NavBar = () => {
    return (
        <AppBar
            position="static"
            style={{ backgroundColor: "#000" }}>
            <div className="toolbarGrid">
                <Toolbar
                    className="toolbar">
                    <img
                        width="160px"
                        height="50px"
                        src={logo} />
                    <div className="linkItem">
                        <p>Premium</p>
                        <p>Support</p>
                        <p>Download</p>
                        <span>|</span>
                        <p>Sign up</p>
                        <p>Log in</p>
                    </div>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </div>

        </AppBar >
    )
}

export default NavBar;

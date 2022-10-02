import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/Spotify_Logo.png";
import useStyles from './navBarCss';
const NavBar = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleNavigateToLandingPage = () => {
        navigate("/us/landingPage")
    }
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
                    <Typography
                        variant="h6"
                        component="div"
                        classes={{
                            root: classes.navBarItemText
                        }}
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{ paddingLeft: "10px", paddingRight: "10px" }}
                    >
                        Support
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                    >
                        Download
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        |
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                    >
                        Sign up
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                        onClick={handleNavigateToLandingPage}
                    >
                        Log in
                    </Typography>
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

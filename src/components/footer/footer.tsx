import { Grid, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import logo from "../../assets/Spotify_Logo.png";
import "./footer.css";

const Footer = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <Grid
                    justifyContent="center"
                    spacing={2}
                    container>
                    <Grid
                        item
                        sm={3}
                        xs={12}>
                        <img
                            width="160px"
                            height="50px"
                            src={logo} />
                    </Grid>
                    <Grid
                        item
                        sm={3}
                        xs={12}>
                        <List
                            subheader={
                                <ListSubheader
                                // style={{ backgroundColor: colors.black, color: colors.grey }}
                                >
                                    COMPANY
                                </ListSubheader>
                            }>
                            <ListItem>
                                <ListItemText>About</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Jobs</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>For the Record</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        sm={3}
                        xs={12}>
                        <List
                            subheader={
                                <ListSubheader
                                // style={{
                                //     backgroundColor: colors.black,
                                //     color: colors.grey,
                                //     // fontFamily: FontFamily.bold,
                                //     fontSize: FontSize.small
                                // }}
                                >COMMUNITIES</ListSubheader>}>
                            <ListItem
                                className="ListItem">
                                <ListItemText>For Artists</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Developers</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Advertising</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Investors</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Vendors</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        sm={3}
                        xs={12}>
                        <List
                            subheader={
                                <ListSubheader
                                // style={{ backgroundColor: colors.black, color: colors.grey }}
                                >USEFUL LINKS</ListSubheader>}
                        >
                            <ListItem>
                                <ListItemText>Support</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Web Player</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>Free Mobile App</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid >
            </Grid >
        </Grid >
    )
}

export default Footer;
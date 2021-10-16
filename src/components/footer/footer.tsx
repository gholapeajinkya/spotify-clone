import { Grid, List, ListItem, ListItemText, ListSubheader, ThemeProvider } from '@mui/material';
import React from 'react';
import { colors } from '../../constants/colors';
import { CustomListSubheader } from '../../util/overidenStyles';
import useStyles from './footerCss';
import logo from "../../assets/Spotify_Logo.png";

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid
            style={{ marginTop: "20px" }}
            className={classes.root}
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
                            style={{ backgroundColor: colors.black, color: colors.grey }}>
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
                    className={classes.listSubHeader}
                    subheader={
                        <ListSubheader
                            style={{ backgroundColor: colors.black, color: colors.grey }}
                        >COMMUNITIES</ListSubheader>}>
                    <ListItem>
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
                    subheader={<ListSubheader style={{ backgroundColor: colors.black, color: colors.grey }} >USEFUL LINKS</ListSubheader>}>
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
    )
}

export default Footer;
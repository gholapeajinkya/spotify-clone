import { Grid, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import { colors } from '../../constants/colors';
import { CustomListSubheader } from '../../util/overidenStyles';
import useStyles from './footerCss';

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid
            className={classes.root}
            justifyContent="center"
            container>
            <Grid
                item
                sm={4}
                xs={12}>
                <List
                    subheader={<CustomListSubheader>
                        COMPANY
                    </CustomListSubheader>}>
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
                sm={4}
                xs={12}>
                <List
                    subheader={<ListSubheader
                        // style={{ backgroundColor: colors.black }}
                        classes={{ root: classes.root }}
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
                sm={4}
                xs={12}>
                <List
                    subheader={<ListSubheader>USEFUL LINKS</ListSubheader>}>
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
        </Grid>
    )
}

export default Footer;
import { Button, ListSubheader, } from "@mui/material";
import { withStyles } from "@mui/styles";
import { colors } from "../constants/colors";

export const CustomListSubheader = withStyles({
    MuiListSubheader: {
        root: {
            backgroundColor: colors.black,
            color: 'red'
        }
    }
})(ListSubheader);


import { ListSubheader, } from "@mui/material";
import { withStyles } from "@mui/styles";
import { colors } from "../constants/colors";

export const CustomListSubheader = withStyles({
    root: {
        backgroundColor: colors.black,
        color: 'red'
    }
})(ListSubheader);
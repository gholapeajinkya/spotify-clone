import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { alpha } from '@mui/system';
import { colors } from '../../constants/colors';

const useStyles = makeStyles({
    navBarItemText: {
        fontFamily: "serif",
        fontSize: "16px",
        '&:hover': {
            color: colors.green,
        },
    }
});

export default useStyles;
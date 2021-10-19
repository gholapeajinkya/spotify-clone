import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { alpha } from '@mui/system';
import { colors } from '../../constants/colors';
import { FontFamily } from '../../constants/fontfamily';
import { FontSize } from '../../constants/fontsizes';

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.black,
        color: colors.white,
        // marginTop: "100px"
    },

    listItem: {
        backgroundColor: colors.black,
        color: colors.white,
        // fontFamily: FontFamily.bold,
        fontSize: FontSize.small
    }
});

export default useStyles;
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { alpha } from '@mui/system';
import { colors } from '../../constants/colors';

const useStyles = makeStyles({
    root: {
        backgroundColor: colors.black,
        color: colors.white
    },
    listSubHeader: {
        backgroundColor: colors.black,
    }
});

export default useStyles;
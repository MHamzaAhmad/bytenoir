import { grey } from '@mui/material/colors';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        // background: grey[200],
        position: 'relative',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        width: '40%',
    },
    container: {
        position: 'relative',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: theme.palette.primary.main,
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    searchField: {
        border: 'none',
        background: 'none',
        color: theme.palette.text.secondary,
        width: '100%',
        height: '2rem',
        fontSize: '1.3rem',
        '&:focus': {
            outline: 'none',
        },
    },
    
}));

export default useStyles;

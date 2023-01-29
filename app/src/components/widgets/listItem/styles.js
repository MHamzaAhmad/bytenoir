import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '0.1rem',
            padding: '0.8rem',
            width: '100%',
            backgroundColor: theme.palette.grays.light,
            margin: '0.1rem 0',
            cursor: 'pointer',
            '& .JoyTypography-root': {
                fontSize: '0.8rem',
            }
        },

    }
});

export default useStyles;

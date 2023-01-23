import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            backgroundColor: `${theme.palette.primary.main} !important`,
            borderRadius: "0.2rem !important",
            '&:hover': {
                background: `none !important`,
                border: `1px solid ${theme.palette.primary.main}`,
                color: `${theme.palette.primary.light} !important`,
            },
        },
    }
});

export default useStyles;

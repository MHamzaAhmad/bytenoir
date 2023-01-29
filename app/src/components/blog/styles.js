import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            backgroundColor: `${theme.palette.text.main} !important`,
            minHeight: "100vh",
            position: "relative",
            padding: "2rem",
        },
    }
});

export default useStyles;

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            backgroundColor: `${theme.palette.text.main} !important`,
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            padding: "2rem",
        },
    }
});

export default useStyles;

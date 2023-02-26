import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "space-between",
            justifyContent: "space-between",
            height: "90vh",
        },
        blogSection: {
            position: "relative",
            backgroundColor: `${theme.palette.text.main} !important`,
            padding: "2rem",
        }
    }
});

export default useStyles;

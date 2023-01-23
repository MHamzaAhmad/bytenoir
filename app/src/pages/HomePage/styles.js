import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "space-between",
            justifyContent: "space-between",
            height: "50vh",
            margin: "0 0 10vh 0"
        }
    }
});

export default useStyles;

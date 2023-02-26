import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.grays.darker,
    color: theme.palette.text.main,
    height: "2.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;

import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginBottom: "2rem",
  },
  container: {
  },
  mainText: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    fontWeight: "bold",
  },
  searchField: {
    border: "none",
    background: "none",
    color: theme.palette.text.secondary,
    width: "100%",
    height: "2rem",
    fontSize: "1.3rem",
    "&:focus": {
      outline: "none",
    },
  },
  logo: {
    position: "relative",
  },
}));

export default useStyles;

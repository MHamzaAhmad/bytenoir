import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "0.2rem",
      "& .JoyInput-root": {
        "--Input-focusedHighlight": theme.palette.primary.main,
      },
    },
    container: {
      padding: "0.4rem 0.7rem 0.7rem 0.7rem",
      height: "80vh",
      overflow: "auto",
      "& .infinite-scroll-component__outerdiv": {
        "& .infinite-scroll-component": {
          overflow: "visible !important",
        },
      },
    },
    searchContainer: {
      padding: "0.4rem 0.4rem 0.4rem 0.4rem",
      backgroundColor: theme.palette.grays.light,
      "& .MuiInput-root": {
        border: `1px solid ${theme.palette.grays.bitDarker}`,
        "--Input-focusedHighlight": theme.palette.primary.main,
        borderRadius: "0.2rem",
        fontSize: "0.8rem",
        minHeight: "2rem",
      },
    },
  };
});

export default useStyles;

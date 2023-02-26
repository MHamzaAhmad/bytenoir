import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      "& .MuiIconButton-root": {
        display: "none !important",
        backgroundColor: `${theme.palette.primary.main} !important`,
        borderRadius: "50%",
        color: `${theme.palette.text.main} !important`,
      },
      "&:hover": {
        transform: "scale(1.1)",
        transition: "transform 0.1s ease-in-out",
        "& p": {
          overflow: "visible !important",
          whiteSpace: "normal !important",
        },
      },
    },
    buttonStack: {
      width: "100%",
    },
    text: {
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden !important",
    },
    blogTile: {
      cursor: "pointer",
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: "0.1rem",
      padding: "0.6rem",
      height: "2.7rem",
      backgroundColor: theme.palette.grays.light,
      margin: "0.1rem 0",
      width: "100%",
      overflow: "visible",
      "& .JoyTypography-root": {
        fontSize: "0.8rem",
      },
    },
  };
});

export default useStyles;

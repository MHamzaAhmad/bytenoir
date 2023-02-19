import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF9F1C",
      light: "#FFBF69",
    },
    secondary: {
      main: "#CBF3F0",
      darker: "#2EC4B6",
    },
    text: {
      main: "#FFFFFF",
      secondary: "#0f4c5c",
      orange: "#FF9F1C",
    },
    grays: {
      light: "#e9ecef",
      bitDarker: "#dee2e6",
      darker: "#ced4da",
      dark: "#6c757d",
    },
  },
  transitions: {
    duration: {
      short: 0.2,
      medium: 0.4,
      long: 0.6,
      shorter: 0.1,
    },
  },
});

export default theme;

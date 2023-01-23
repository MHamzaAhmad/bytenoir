import { createTheme } from "@mui/system";
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF9F1C',
            light: '#FFBF69',
        },
        secondary: {
            main: '#CBF3F0',
            darker: '#2EC4B6',
            lightGrey: '#dee2e6'
        },
        text: {
            main: '#FFFFFF',
            secondary: '#0f4c5c',
            orange: '#FF9F1C',
        }
    },
});

export default theme;

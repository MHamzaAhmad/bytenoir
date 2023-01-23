import { Typography } from "@mui/joy";
import { makeStyles } from "@mui/styles";

const OrangeHeading = (props) => {
    const styles = makeStyles((theme) => {
        return {
            root: {
                color: `${theme.palette.text.orange} !important`,
                fontWeight: "bold",
                fontSize: "2.5rem !important",
            },
        }
    })();
    return (
        <Typography component="h1" className={styles.root}>
            {props.children}
        </Typography>
    );
}

export default OrangeHeading;

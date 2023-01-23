import { Button } from "@mui/joy";
import useStyles from "./styles";

const CustomButton = (props) => {
    const styles = useStyles();
    return (
        <Button
        ref={props.reference}
        className={styles.root}
        onClick={() => props.onClick()}
        >{props.children} </Button>
    );
}

export default CustomButton;

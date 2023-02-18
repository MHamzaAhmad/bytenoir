import { Button } from "@mui/material";
import useStyles from "./styles";

const CustomButton = (props) => {
    const styles = useStyles;
    return (
        <Button
        ref={props.reference}
        sx={styles.root}
        onClick={() => props.onClick()}
        >{props.children} </Button>
    );
}

export default CustomButton;

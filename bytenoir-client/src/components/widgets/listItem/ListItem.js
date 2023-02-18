import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import useStyles from "./styles";

const ListItem = (props) => {
    const styles = useStyles();

    return (
        <Box
        className={styles.root}
        component="button"
        onClick={(e) => props.onSelect(props.item)}>
            <Typography className={styles.text}> {_.capitalize(props.item.title)} </Typography>
        </Box>
    );
}

export default ListItem;

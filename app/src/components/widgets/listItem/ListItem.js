import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import _ from "lodash";
import { useBlogs } from "../../../store/hooks";
import useStyles from "./styles";

const ListItem = (props) => {
    const styles = useStyles();
    const {setAdminBlog} = useBlogs();

    const changeBlog = (e) => {
        e.preventDefault();
        setAdminBlog(props.item);
    }
    return (
        <Box
        className={styles.root}
        component="button"
        onClick={changeBlog}>
            <Typography className={styles.text}> {_.capitalize(props.item.title)} </Typography>
        </Box>
    );
}

export default ListItem;

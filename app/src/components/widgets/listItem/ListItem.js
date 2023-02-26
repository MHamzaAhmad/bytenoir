import { Typography } from "@mui/joy";
import { Box } from "@mui/system";
import _ from "lodash";
import useStyles from "./styles";

const ListItem = (props) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box
        className={styles.blogTile}
        component="button"
        onClick={(e) => props.onSelect(props.item)}
      >
        <Typography className={styles.text}>
          {_.capitalize(props.item.title)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ListItem;

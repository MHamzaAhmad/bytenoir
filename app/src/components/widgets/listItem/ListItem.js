import { IconButton, Typography } from "@mui/joy";
import { Icon } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Stack } from "@mui/system";
import _ from "lodash";
import useStyles from "./styles";

const ListItem = (props) => {
  const styles = useStyles();

  const takeToBlog = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = `/blogs/${props.item._id}`;
  };

  return (
    <Box className={styles.container}>
      <Stack direction="row" className="buttonStack">
        <IconButton className={styles.iconButton} onClick={takeToBlog}>
          <Icon>
            <OpenInNewIcon />
          </Icon>
        </IconButton>
      </Stack>
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

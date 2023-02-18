import { Typography } from "@mui/material";

const OrangeHeading = (props) => {
  const styles = {
    root: {
      color: `text.orange !important`,
      fontWeight: "bold",
      fontSize: "2.5rem !important",
    },
  };
  return (
    <Typography component="h1" sx={styles.root}>
      {props.children}
    </Typography>
  );
};

export default OrangeHeading;

import { Box } from "@mui/system";
import useStyles from "./styles";

const MainLogo = () => {
  const styles = useStyles();
  return (
    <Box className={styles.logo}>
      <img src="/logo.svg" alt="logo"/>
    </Box>
  );
};
export default MainLogo;

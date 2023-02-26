import useStyles from "./styles";

const Footer = () => {
  const styles = useStyles();
  return (
    <footer className={styles.root}>
      <p>© 2023 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

import { Box, Container, Stack } from "@mui/joy";
import useStyles from "./styles";
import ReactTyped from 'react-typed';

const MainText = () => {
    const styles = useStyles();

    return (
        <Container className={styles.container}>
            <Box className={styles.root}>
                <ReactTyped
                className={styles.mainText}
                loop={true}
                typeSpeed={60}
                startDelay={30}
                backSpeed={40}
                backDelay={100}
                strings={["Find what you're looking for", "Uncover hidden gems", "Search for inspiration", "Discover the unknown"]}
                bindInputFocusEvents={false}
                />
            </Box>
        </Container>
    );
}

export default MainText;

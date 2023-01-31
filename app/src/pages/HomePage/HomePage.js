import { Stack, Box, Grid } from "@mui/joy";
import { useEffect, useRef } from "react";
import BlogPost from "../../components/blog/BlogPost";
import ParticleBackground from "../../components/common/particle_background";
import LatestBlogBtn from "../../components/homePage/latestBlogBtn";
import MainText from "../../components/homePage/mainText";
import useStyles from "./styles";
import AllBlogsList from "../../components/lists/AllBlogs/AllBlogs";
import { useBlogs } from "../../store/hooks";

const HomePage = () => {
    const styles = useStyles();
    const blogRef = useRef(null);
    const { setLatestBlog, getLatestBlog, latestBlog } = useBlogs();

    useEffect( () => {
        getLatestBlog();
    }, [])

    return (
        <>
            <header className="App-header">
                <Stack>
                    <ParticleBackground />
                    <Box className={styles.root}>
                        <MainText />
                        <LatestBlogBtn reference={blogRef} />
                    </Box>
                </Stack>
            </header>
            <Box component="section" ref={blogRef} className={styles.blogSection}>
                <Grid container spacing={2}>
                    <Grid md={10} xs={12}>
                        <BlogPost blog={latestBlog}/>
                    </Grid>
                    <Grid md={2} xs={12}>
                        <AllBlogsList onSelect={setLatestBlog} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default HomePage;

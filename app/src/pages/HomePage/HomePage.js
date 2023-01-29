import { Stack, Box, Grid } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import Blog from "../../models/blog";
import BlogPost from "../../components/blog/BlogPost";
import ParticleBackground from "../../components/common/particle_background";
import LatestBlogBtn from "../../components/homePage/latestBlogBtn";
import MainText from "../../components/homePage/mainText";
import useStyles from "./styles";
import blogService from "../../services/blog_service";
import AllBlogsList from "../../components/lists/AllBlogs/AllBlogs";
import { Provider } from "react-redux";
import store from "../../store/store";

const HomePage = () => {
    const styles = useStyles();
    const blogRef = useRef(null);
    const [blog, setBlog] = useState(Blog.fromJson({title: 'Loading...'}));

    useEffect( () => {
         blogService.getLatestBlog().then((res) => {
            setBlog(Blog.fromJson(res.data[0]));
        });
    }, [])
    return (
        <>
            <Provider store={store}>
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
                            <BlogPost blog={blog}/>
                        </Grid>
                        <Grid md={2} xs={12}>
                            <AllBlogsList />
                        </Grid>
                    </Grid>
                </Box>
            </Provider>
        </>
    );
}

export default HomePage;

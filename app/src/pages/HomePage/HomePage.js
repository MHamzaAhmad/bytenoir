import { Stack, Box } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import Blog from "../../models/blog";
import BlogPost from "../../components/blog/BlogPost";
import ParticleBackground from "../../components/common/particle_background";
import LatestBlogBtn from "../../components/homePage/latestBlogBtn";
import MainText from "../../components/homePage/mainText";
import useStyles from "./styles";
import blogService from "../../services/blog_service";

const HomePage = () => {
    const styles = useStyles();
    const blogRef = useRef(null);
    const [blog, setBlog] = useState(Blog.fromJson({title: 'Loading...'}));

    useEffect( () => {
        console.log();
         blogService.getLatestBlog().then((res) => {
            console.log('setting blog');
            console.log(res.data);
            setBlog(Blog.fromJson(res.data));
            console.log(blog.title);
        });
    })
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
            <BlogPost reference={blogRef} blog={blog}/>
        </>
    );
}

export default HomePage;

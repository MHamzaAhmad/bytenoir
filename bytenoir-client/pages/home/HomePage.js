import { Stack, Box, Grid } from "@mui/joy";
import { useEffect, useRef } from "react";
import BlogPost from "../../src/components/blog/BlogPost";
import ParticleBackground from "../../src/components/common/particle_background";
import LatestBlogBtn from "../../src/components/homePage/latestBlogBtn";
import MainText from "../../src/components/homePage/mainText";
import useStyles from "./styles";
import AllBlogsList from "../../src/components/lists/AllBlogs/AllBlogs";
import { useBlogs } from "../../src/store/hooks";

const HomePage = () => {
  const styles = useStyles;
  const blogRef = useRef(null);
  const { setLatestBlog, latestBlog } = useBlogs();

  return (
    <>
      <header className="App-header">
        <Stack>
          <ParticleBackground />
          <Box sx={styles.root}>
            <MainText />
            <LatestBlogBtn reference={blogRef} />
          </Box>
        </Stack>
      </header>
      <Box component="section" ref={blogRef} sx={styles.blogSection}>
        <Grid container spacing={2}>
          <Grid md={10} xs={12}>
            <BlogPost blog={latestBlog} />
          </Grid>
          <Grid md={2} xs={12}>
            <AllBlogsList onSelect={setLatestBlog} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  await (await import("../../src/store/hooks")).useBlogs().getLatestBlog();
};

export default HomePage;

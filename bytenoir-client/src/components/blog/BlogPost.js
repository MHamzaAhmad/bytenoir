import { Box } from "@mui/material";
import BlogContent from "../typography/blogContent";
import OrangeHeading from "../typography/heading";
import BlogMetadata from "./BlogMetadata";
import useStyles from "./styles";

const BlogPost = ({ blog }) => {
    const styles = useStyles;
    return (
        <Box component="section" id="blog-post" sx={styles.root}>
            <BlogMetadata blog={blog}/>
            <OrangeHeading> {blog.title} </OrangeHeading>
            <BlogContent content={blog.body}/>
        </Box>
    );
}

export default BlogPost;

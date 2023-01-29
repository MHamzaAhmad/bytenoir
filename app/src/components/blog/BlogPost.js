import { Box } from "@mui/joy";
import BlogContent from "../typography/blogContent";
import OrangeHeading from "../typography/heading";
import useStyles from "./styles";

const BlogPost = (props) => {
    const styles = useStyles();
    return (
        <Box component="section" id="blog-post" className={styles.root}>
            <OrangeHeading> {props.blog.title} </OrangeHeading>
            <BlogContent content={props.blog.body}/>
        </Box>
    );
}

export default BlogPost;

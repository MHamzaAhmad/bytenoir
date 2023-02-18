import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlogs } from '../../store/hooks';
import { Box } from '@mui/joy';
import Helmet from 'react-helmet';
import BlogPost from '../../components/blog/BlogPost';
import useStyles from './styles';

const BlogPage = () => {
    const { id } = useParams();
    const { getBlog } = useBlogs();
    const [blog, setBlog] = useState({});
    const styles = useStyles();
    useEffect(() => {
        const fetchBlog = async () => {
            console.log(id)
            const blog =  await getBlog(id);
            setBlog(blog);
        }
        fetchBlog();
    }, [id]);

    return (
        <Box className={styles.blog}>
            <Helmet>
                <title>{blog.title}</title>
                <meta name="description" content={blog.title} />
            </Helmet>
            <BlogPost blog={blog}/>
        </Box>
    );
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3001/blogs');
    const blogs = await res.json();
    const paths = blogs.map(blog => {
        return {
            params: { id: blog.id.toString() }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export default BlogPage;

import { Box, Grid } from '@mui/joy';
import useStyles from './styles';
import AllBlogsList from '../../components/lists/AllBlogs/AllBlogs';
import DraftBlogsList from '../../components/lists/DraftBlogs/DraftBlogs';
import Editor from '../../components/editor/Editor';
import { useBlogs } from '../../store/hooks';


const Admin = () => {
    const styles = useStyles();
    const {setAdminBlog} = useBlogs();


    return (
        <Box className={styles.root}>
            <Grid container spacing={2}>
            <Grid md={2} xs={12}>
                <DraftBlogsList onSelect={setAdminBlog}/>
              </Grid>
              <Grid md={8} xs={12}>
                <Editor />
              </Grid>
              <Grid md={2} xs={12}>
                <AllBlogsList onSelect={setAdminBlog} />
              </Grid>
            </Grid>
        </Box>
    );
}
export default Admin;

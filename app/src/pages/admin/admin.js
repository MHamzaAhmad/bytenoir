import { Box, Grid } from '@mui/joy';
import useStyles from './styles';
import { Provider } from 'react-redux';
import AllBlogsList from '../../components/lists/AllBlogs/AllBlogs';
import DraftBlogsList from '../../components/lists/DraftBlogs/DraftBlogs';
import store from '../../store/store'
import Editor from '../../components/editor/Editor';


const Admin = () => {
    const styles = useStyles();


    return (
        <Provider store={store}>
          <Box className={styles.root}>
              <Grid container spacing={2}>
              <Grid md={2} xs={12}>
                  <DraftBlogsList />
                </Grid>
                <Grid md={8} xs={12}>
                  <Editor />
                </Grid>
                <Grid md={2} xs={12}>
                  <AllBlogsList />
                </Grid>
              </Grid>
          </Box>
        </Provider>
    );
}
export default Admin;

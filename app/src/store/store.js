import {configureStore} from '@reduxjs/toolkit';
import BlogsSlice from './redux/blogsSlice';


export default configureStore({
    reducer: {
        blogs: BlogsSlice,
    },
});

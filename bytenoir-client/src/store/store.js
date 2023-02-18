import {configureStore} from '@reduxjs/toolkit';
import BlogsSlice from './redux/blogsSlice';
import {createWrapper} from 'next-redux-wrapper';


export default configureStore({
    reducer: {
        [BlogsSlice.name] : BlogsSlice.reducer,
    },
});
// export default createWrapper(makeStore, {debug: true});

import {createSlice} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import blogService from '../../services/blog_service';
import _ from 'lodash';

export const BlogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        draftBlogs: [],
        hasMore: true,
        hasMoreDraft: true,
        adminBlog: {},
        latestBlog: {},
    },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        setDraftBlogs: (state, action) => {
            state.draftBlogs = action.payload;
        },
        addBlog: (state, action) => {
            if(action.payload.status === 'publish'){
                state.blogs = [action.payload, ...state.blogs];
            } else {
                state.draftBlogs = [action.payload, ...state.draftBlogs];
            }
        },
        setHasMore: (state, action) => {
            state.hasMore = action.payload;
        },
        setHasMoreDraft: (state, action) => {
            state.hasMoreDraft = action.payload;
        },
        setAdminBlog: (state, action) => {
            state.adminBlog = action.payload;
        },
        setLatestBlog: (state, action) => {
            state.latestBlog = action.payload;
        },
        clearBlogs: (state, action) => {
            if (action.payload === 'publish') {
                state.blogs = [];
                state.hasMore = true;
            } else {
                state.draftBlogs = [];
                state.hasMoreDraft = true;
            }
        }
    },
});

export const useBlogsActions = () => {
    const dispatch = useDispatch();

    const getBlogs = async (page, limit) => {
        const res = await blogService.getBlogs(page, limit);
        dispatch(BlogsSlice.actions.setBlogs([...res.data.blogs]));
        dispatch(BlogsSlice.actions.setHasMore(res.data.hasMore));
    }

    const getDraftBlogs = async (page, limit) => {
        const res = await blogService.getDraftBlogs(page, limit);
        dispatch(BlogsSlice.actions.setDraftBlogs([...res.data.blogs]));
        dispatch(BlogsSlice.actions.setHasMoreDraft(res.data.hasMore));
    }

    const setAdminBlog = (blog) => {
        dispatch(BlogsSlice.actions.setAdminBlog(blog));
    }

    const setLatestBlog = (blog) => {
        dispatch(BlogsSlice.actions.setLatestBlog(blog));
    }

    const getLatestBlog = async () => {
        const res = await blogService.getLatestBlog();
        dispatch(BlogsSlice.actions.setLatestBlog(res.data[0]));
    }

    const createBlog = async (blog) => {
        const res = await blogService.postBlog(blog);
        dispatch(BlogsSlice.actions.addBlog(res.data));
        dispatch(BlogsSlice.actions.setAdminBlog(res.data));
    }

    const updateBlog = async (blog) => {
        await blogService.updateBlog(blog);
    }

    const searchBlogs = _.memoize(async (query, page, limit, status) => {
        if(page === 1) dispatch(BlogsSlice.actions.clearBlogs(status));
        const res = await blogService.searchBlogs(query, page, limit, status);
        if (status === 'publish'){
            dispatch(BlogsSlice.actions.setBlogs([...res.data.blogs]));
            dispatch(BlogsSlice.actions.setHasMore(res.data.hasMore));
        } else {
            dispatch(BlogsSlice.actions.setDraftBlogs([...res.data.blogs]));
            dispatch(BlogsSlice.actions.setHasMoreDraft(res.data.hasMore));
        }
    })

    return {
        getBlogs,
        getDraftBlogs,
        setAdminBlog,
        createBlog,
        updateBlog,
        searchBlogs,
        getLatestBlog,
        setLatestBlog,
    }
}

export default BlogsSlice.reducer;

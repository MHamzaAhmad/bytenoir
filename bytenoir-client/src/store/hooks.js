import { useSelector } from "react-redux";
import { useBlogsActions } from "./redux/blogsSlice";

export const useBlogs = () => ({
    ...useSelector((state) => state.blogs),
    ...useBlogsActions()
});


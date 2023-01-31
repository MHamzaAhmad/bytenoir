import {useEffect, useState} from 'react'
import { pageLimit } from '../../../configs/constants';
import { useBlogs } from '../../../store/hooks';
import InfiniteList from '../../widgets/list/InfiniteList';

const AllBlogsList = (props) => {
    const { getBlogs, hasMore, blogs,  } = useBlogs();
    const [page, setPage] = useState(1)

    const fetchBlogs = async () => {
        getBlogs(page, pageLimit);
        setPage(page + 1);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <InfiniteList
            onSelect={props.onSelect}
            items={blogs}
            next={fetchBlogs}
            hasMore={hasMore}
            type='publish'
        />
    );
}

export default AllBlogsList;

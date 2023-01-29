import {useEffect, useState} from 'react'
import { pageLimit } from '../../../configs/constants';
import { useBlogs } from '../../../store/hooks';
import InfiniteList from '../../widgets/list/InfiniteList';

const DraftBlogsList = () => {
    const { draftBlogs, getDraftBlogs, hasMoreDraft} = useBlogs();
    const [page, setPage] = useState(1)

    const fetchBlogs = async () => {
        getDraftBlogs(page, pageLimit);
        setPage(page + 1);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <InfiniteList
            items={draftBlogs}
            next={fetchBlogs}
            hasMore={hasMoreDraft}
            type='draft'
        />
    );
}

export default DraftBlogsList;

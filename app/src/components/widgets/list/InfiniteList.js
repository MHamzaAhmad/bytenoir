import { Box, Input } from '@mui/joy';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import { useBlogs } from '../../../store/hooks';
import ListItem from '../listItem/ListItem';
import Loader from '../loader/Loader';
import useStyles from './styles';
import _ from 'lodash';
import { pageLimit } from '../../../configs/constants';

const InfiniteList = (props) => {
    const styles = useStyles();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const {searchBlogs, getBlogs, getDraftBlogs} = useBlogs();

    const debounceSearch = _.debounce((e) => {
        searchBlogs(e.target.value, page, pageLimit, props.type);
    }, 1500);

    useEffect(() => {
        if(search !== '') debounceSearch(search);
    }, [search]);

    const fetchMore = async () => {
        if (props.type === 'publish') getBlogs(page, pageLimit);
        else if (props.type === 'draft') getDraftBlogs(page, pageLimit);
        setPage(page + 1);
    };

    return (
        <Box className={styles.root}>
            <Box className={styles.searchContainer}>
                <Input
                className={styles.searchBar}
                placeholder='Search the title'
                onChange={setSearch}
                />
            </Box>
            <Box id="list-container" className={styles.container}>
                <InfiniteScroll
                dataLength={props.items.length}
                next={fetchMore}
                hasMore={props.hasMore}
                scrollableTarget="list-container"
                loader={<Loader />}
                endMessage={<p>That's all folks</p>}
                >
                {props.items.map((item, index) => <ListItem key={index} item={item}/>)}
                </InfiniteScroll>
            </Box>
        </Box>
    );
}

export default InfiniteList

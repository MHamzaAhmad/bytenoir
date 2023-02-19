import { Box, Input } from "@mui/joy";
import { useCallback, useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useBlogs } from "../../../store/hooks";
import ListItem from "../listItem/ListItem";
import Loader from "../loader/Loader";
import useStyles from "./styles";
import { pageLimit } from "../../../configs/constants";
import PropTypes from "prop-types";
import _ from "lodash";

const InfiniteList = (props) => {
  const styles = useStyles();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { searchBlogs } = useBlogs();

  const debounceSearch = useCallback(
    _.debounce((e) => {
      searchBlogs(e.target.value, page, pageLimit, props.type);
    }, 700),
    []
  );

  // useCallback(() => {
  //     if(search !== '') debounceSearch(search);
  // }, [debouncedSearch]);

  const fetchMore = async () => {
    searchBlogs(search, page, pageLimit, props.type);
    setPage(page + 1);
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.searchContainer}>
        <Input
          className={styles.searchBar}
          placeholder="Search the title"
          onChange={debounceSearch}
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
          {props.items.map((item, index) => (
            <ListItem key={index} item={item} onSelect={props.onSelect} />
          ))}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

InfiniteList.propsTypes = {
  onSelect: PropTypes.func.required,
};

export default InfiniteList;

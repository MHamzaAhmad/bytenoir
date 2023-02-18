import { Box, Stack, Typography } from "@mui/material";
import { formatDate } from "../../utils/formatters";

const BlogMetadata = ({ blog }) => {
    return (
        <Box>
            <Stack direction="row" justifyContent="end">
                <Typography variant="body1">{formatDate(blog.createdAt)}</Typography>
            </Stack>
        </Box>
    );
};

export default BlogMetadata;

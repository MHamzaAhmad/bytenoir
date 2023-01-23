import { makeStyles } from "@mui/styles";

const BlogContent = ({ content }) => {
    const styles = makeStyles((theme) => {
        return {
            root: {
                color: `${theme.palette.text.secondary} !important`,
            }
        }
    })();
    return (
        <div className={styles.root} dangerouslySetInnerHTML={{ __html: content }}>

        </div>
    );
}

export default BlogContent

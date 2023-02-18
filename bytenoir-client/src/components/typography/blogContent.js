const BlogContent = ({ content }) => {
  const styles = {
    root: {
      color: `text.secondary !important`,
    },
  };
  return (
    <div
      className={styles.root}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};

export default BlogContent;

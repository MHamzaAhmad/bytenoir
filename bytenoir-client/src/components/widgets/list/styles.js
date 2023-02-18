
const useStyles = {
        root: {
            position: 'relative',
            border: `1px solid primary.main`,
            borderRadius: '0.2rem',
            '& .JoyInput-root': {
                '--Input-focusedHighlight': 'primary.main',
            },
        },
        container: {
            padding: '0.4rem 0.7rem 0.7rem 0.7rem',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
        },
        searchContainer: {
            padding: '0.4rem 0.4rem 0.4rem 0.4rem',
            backgroundColor: 'grays.light',
            '& .JoyInput-root': {
                border: `1px solid grays.bitDarker`,
                borderRadius: '0.2rem',
                fontSize: '0.8rem',
                minHeight: '2rem',
            },
        },
        searchBar: {

        },
    };

export default useStyles;

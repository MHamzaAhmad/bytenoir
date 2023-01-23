import {makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => {
    return {
        root: {
            margin: '2rem',
            position: 'relative',
            '& .JoyInput-root': {
                '--Input-focusedHighlight': `${theme.palette.primary.main} !important`,
            }
        },
        title: {
            margin: '0.8rem 0',
            padding: '0.6rem',
            border: `1px solid ${theme.palette.primary.main} !important`,
        },
        editor: {
            display: 'block',
            width: '100%',
            '& .ql-toolbar, .ql-container': {
                border: `1px solid ${theme.palette.primary.main}`,
            },
            '& .ql-toolbar': {
                borderTopLeftRadius: '0.4rem',
                borderTopRightRadius: '0.4rem',
                textAlign: 'left',
            },
            '& .ql-container': {
                height: '60vh',
                backgroundColor: theme.palette.secondary.lightGrey,
                borderBottomLeftRadius: '0.4rem',
                borderBottomRightRadius: '0.4rem',
            },
        },
        btnGrp: {
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '1rem',
        },
    }
})

export default useStyles;

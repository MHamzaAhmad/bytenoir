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
        
    }
})

export default useStyles;

import {makeStyles} from "@mui/styles";
const useStyles = makeStyles((theme) => {
    return {
        title: {
            marginBottom: '0.8rem',
            padding: '0.8rem',
            width: '90%',
            border: `1px solid ${theme.palette.primary.main} !important`,
            borderRadius: '0.2rem',
            fontSize: '1.2rem',
            color: theme.palette.grays.dark,
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
                backgroundColor: theme.palette.grays.light,
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
});

export default useStyles;

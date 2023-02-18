import {Box} from '@mui/joy';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import CustomButton from '../../components/widgets/button/CustomButton';
import blogService from '../../services/blog_service';
import useStyles from './styles';
import _ from 'lodash';
import 'react-quill/dist/quill.snow.css';
import { useBlogs } from '../../store/hooks';

const Editor = () => {
    const {adminBlog, createBlog, updateBlog} = useBlogs();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('draft');
    const [id, setId] = useState('');
    const [shouldCreate, setShouldCreate] = useState(true);

    const styles = useStyles();

    useEffect(() => {
        if(!_.isEmpty(adminBlog)) {
            setId(adminBlog._id);
            setTitle(adminBlog.title);
            setBody(adminBlog.body);
            setStatus(adminBlog.status);
            setShouldCreate(false);
        }
    }, [adminBlog]);

    const modules = {
        toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
        {'indent': '-1'}, {'indent': '+1'}],
        ['code-block'],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        matchVisual: false,
    }
    }

    const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'code-block',
    'link', 'image', 'video',
    ];

    const save = async (val) => {
        if (shouldCreate) {
            createBlog(val);
        } else {
            updateBlog({id: id, ...val});
        }
    }

    return (
        <Box>
            <input
                className={styles.title}
                placeholder='Enter the title'
                value={title}
                onChange={(e) => {setTitle(e.target.value)}} />
                <ReactQuill
                className={styles.editor}
                theme='snow'
                value={body}
                onChange={setBody}
                modules={modules}
                formats={formats}
                />
                <Box className={styles.btnGrp}>
                    <CustomButton
                    onClick={() => save({title: title, body: body, status: status})}
                    >Save Draft</CustomButton>
                    <CustomButton
                    onClick={() => {
                        setStatus('publish');
                        save({title: title, body: body, status: 'publish'});
                    }}
                    >Publish</CustomButton>
                </Box>
        </Box>
    );
}

export default Editor;

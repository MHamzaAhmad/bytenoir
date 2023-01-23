import { useState } from 'react';
import ReactQuill from 'react-quill';
import useStyles from './styles';
import { Box, Input } from '@mui/joy';
import { useAutosave } from 'react-autosave';
import CustomButton from '../../components/widgets/button/CustomButton';
import 'react-quill/dist/quill.snow.css';
import Blog from '../../models/blog';
import blogService from '../../services/blog_service';


const Admin = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('draft');
    const [blog, setBlog] = useState(Blog.empty());
    const [shouldCreate, setShouldCreate] = useState(true);
    const styles = useStyles();


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
        const newBlog = await blogService.postBlog(val);
        setBlog(Blog.fromJson(newBlog.data));
        setShouldCreate(false);
      } else {
        const newBlog = await blogService.updateBlog({...val, id: blog.id});
        setBlog(Blog.fromJson(newBlog.data));
      }
    }
    useAutosave({data: {title: title, body: body, status: status}, onSave: save, delay: 3000});


    return (
        <Box className={styles.root}>
            <Input
            className={styles.title}
            placeholder='Enter the title'
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
                  onClick={() => setStatus('publish')}
                  >Publish</CustomButton>
            </Box>
        </Box>
    );
}
export default Admin;

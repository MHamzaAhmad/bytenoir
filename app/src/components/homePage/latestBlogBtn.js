import CustomButton from "../widgets/button/CustomButton";
import useStyles from "./styles";

const LatestBlogBtn = (props) => {
    const handleClick = (props) => {
        props.reference.current.scrollIntoView({behavior: "smooth"});
    }
    return (
        <CustomButton
        ref={props.reference}
        onClick={() => handleClick(props)}
        >
            Check out latest Blog
        </CustomButton>
    )
}

export default LatestBlogBtn;

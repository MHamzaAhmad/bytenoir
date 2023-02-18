import CustomButton from "../widgets/button/CustomButton";

const LatestBlogBtn = (props) => {
    const handleClick = (props) => {
        props.reference.current.scrollIntoView({behavior: "smooth"});
    }
    return (
        <CustomButton
        reference={props.reference}
        onClick={() => handleClick(props)}
        >
            Check out latest Blog
        </CustomButton>
    )
}

export default LatestBlogBtn;

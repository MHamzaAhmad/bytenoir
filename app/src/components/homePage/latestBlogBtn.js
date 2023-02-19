import CustomButton from "../widgets/button/CustomButton";
import party from "party-js";

const LatestBlogBtn = (props) => {
  const handleClick = (props) => {
    party.confetti(props.reference.current, {
      count: party.variation.range(100, 150),
    });
    props.reference.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <CustomButton
      reference={props.reference}
      onClick={() => handleClick(props)}
    >
      Check out latest Blog
    </CustomButton>
  );
};

export default LatestBlogBtn;

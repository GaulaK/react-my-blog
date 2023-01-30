import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = (props) => {
  return (
    <div className="aboutme">
      <ItemTitle title={props.title} />
      <ItemPicture src={props.src} />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default AboutMe;

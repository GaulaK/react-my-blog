import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle title={props.title} />
      <ItemSubtitle subtitle={props.subtitle} />
      <ItemPicture src={props.src} />
      <ItemDescription description={props.description} />
    </div>
  );
};

export default Item;

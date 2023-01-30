import Title from "./Title";
import Baseline from "./Baseline";

const Header = (props) => {
  return (
    <header>
      <Title title={props.title} />
      <Baseline text={props.baseline} />
    </header>
  );
};

export default Header;

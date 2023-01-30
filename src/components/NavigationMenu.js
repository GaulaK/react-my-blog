import Link from "./Link";

const NavigationMenu = () => {
  return (
    <nav className="navBar">
      <div className="left">
        <Link target="#" text="Link" />
        <Link target="#" text="Link" />
        <Link target="#" text="Link" />
      </div>
      <div className="right">
        <Link target="#" text="Link" />
      </div>
    </nav>
  );
};

export default NavigationMenu;

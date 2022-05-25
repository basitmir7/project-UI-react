import SingleLink from "./singlelink";
const NavLinks = () => {
  return (
    <div className="navbar-links">
      <SingleLink link="Home" />
      <SingleLink link="Classes" />
      <SingleLink link="our Gym" />
      <SingleLink link="Gallery" />
      <SingleLink link="contact" />
    </div>
  );
};

export default NavLinks;

import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.css";
import NavList from "../NavList/NavList";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className="header">
      <Hamburger clicked={clicked} handleClick={handleClick} />
      <NavList clicked={clicked} setClicked={setClicked} />
    </header>
  );
};

export default Header;

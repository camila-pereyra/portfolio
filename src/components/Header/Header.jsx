import { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import "./Header.css";
import NavList from "../NavList/NavList";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const screenSizes = (e) => {
    if (e.target.innerWidth > 768) {
      setClicked(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", screenSizes);
  }, []);
  return (
    <header className="header">
      <Hamburger clicked={clicked} handleClick={handleClick} />
      <NavList clicked={clicked} setClicked={setClicked} />
    </header>
  );
};

export default Header;

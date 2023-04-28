import classNames from "classnames";
import "./NavList.css";
const NavList = ({ clicked, setClicked }) => {
  const classNav = classNames({
    navHamburger: true,
    navHamburgerClose: !clicked,
  });

  return (
    <nav className={classNav}>
      <ul className="navList">
        <li>
          <a href="#aboutMe" onClick={() => setClicked(false)}>
            Sobre mi
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => setClicked(false)}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setClicked(false)}>
            Proyectos
          </a>
        </li>
        <li id="lastLiNav">
          <a href="#contact" onClick={() => setClicked(false)}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;

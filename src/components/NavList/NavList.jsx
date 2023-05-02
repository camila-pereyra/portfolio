import classNames from "classnames";
import "./NavList.css";
const NavList = ({ clicked, setClicked }) => {
  const classNav = classNames({
    navHamburger: true,
    navHamburgerClose: !clicked,
  });

  return (
    <nav className={classNav}>
      <div className="navList">
        <a
          href="#aboutMe"
          className="navOption"
          onClick={() => setClicked(false)}
        >
          Sobre mi
        </a>
        <a
          href="#skills"
          className="navOption"
          onClick={() => setClicked(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="navOption"
          onClick={() => setClicked(false)}
        >
          Proyectos
        </a>
        <a
          href="#contact"
          className="navOption"
          id="lastLiNav"
          onClick={() => setClicked(false)}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default NavList;

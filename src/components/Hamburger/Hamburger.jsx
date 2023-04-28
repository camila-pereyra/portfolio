import "./Hamburger.css";
import classNames from "classnames";

const Hamburger = ({ clicked, handleClick }) => {
  const classHamburger = classNames({
    hamburger: true,
    "hamburger--spin": clicked,
  });
  return (
    <div className={classHamburger} onClick={handleClick}>
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Hamburger;

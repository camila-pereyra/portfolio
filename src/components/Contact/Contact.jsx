import "./Contact.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
export const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="tittleSection">Contacto</h2>
      <a href="https://www.linkedin.com/in/camila-bianca-pereyra/">
        <div className="rowContact">
          <AiFillLinkedin />
          <h4>linkedin.com/in/camila-bianca-pereyra</h4>
        </div>
      </a>
      <a href="https://github.com/camila-pereyra">
        <div className="rowContact">
          <AiFillGithub />
          <h4>github.com/camila-pereyra</h4>
        </div>
      </a>
      <a href="mailto:campereyra23051995@gmail.com">
        <div className="rowContact">
          <AiOutlineMail />
          <h4>campereyra23051995@gmail.com</h4>
        </div>
      </a>
      <a href="mailtocamilabpereyra2305@gmail.com">
        <div className="rowContact">
          <AiOutlineMail />
          <h4>camilabpereyra2305@gmail.com</h4>
        </div>
      </a>
    </section>
  );
};

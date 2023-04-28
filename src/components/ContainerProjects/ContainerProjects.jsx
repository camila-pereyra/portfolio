import "./ContainerProjects.css";
import "../../App.css";
import calculator from "../../image/projects/calculator.png";
import dalemasafro from "../../image/projects/dalemasafro.jpg";
import faqam from "../../image/projects/faqam.jpg";
import foodVeggie from "../../image/projects/food_veggie.jpg";
import myc from "../../image/projects/myc.png";
import task from "../../image/projects/task.png";
import tateti from "../../image/projects/tateti.png";
import weather from "../../image/projects/weather.png";
import react from "../../image/react.png";
import js from "../../image/javascript.png";
import css from "../../image/css.png";
import html from "../../image/html.png";
import sass from "../../image/sass.png";
import firebase from "../../image/firebase.png";
const ContainerProjects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="tittleSection">Proyectos</h2>
      <div className="containerProjects">
        <div className="project">
          <h4 className="tittleProject">Ecommerce</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={firebase} alt="" />
          </div>
          <div className="projectImage">
            <img src={foodVeggie} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">Calculator</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
          </div>
          <div className="projectImage">
            <img src={calculator} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">Ecommerce</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
          </div>
          <div className="projectImage">
            <img src={faqam} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">TA-TE-TI</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
          </div>
          <div className="projectImage">
            <img src={tateti} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">Dale Mas Afro</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={sass} alt="" />
          </div>
          <div className="projectImage">
            <img src={dalemasafro} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">Weather App</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
          </div>
          <div className="projectImage">
            <img src={weather} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">Todo</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
          </div>
          <div className="projectImage">
            <img src={task} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
        <div className="project">
          <h4 className="tittleProject">M&C</h4>
          <div className="skillsProject">
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={sass} alt="" />
          </div>
          <div className="projectImage">
            <img src={myc} alt="" />
          </div>
          <p className="projectInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
            corrupti magni velit officia nam.
          </p>
          <a href="" className="linkProject">
            Repositorio
          </a>
          <a href="" className="linkProject">
            Deploy
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContainerProjects;

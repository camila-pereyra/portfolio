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
import boostrap from "../../image/bs.png";
import Project from "../Project/Project";
const ContainerProjects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="tittleSection">Proyectos</h2>
      <div className="containerProjects">
        <Project
          tittle="Food Veggie"
          skills={[html, css, js, react, firebase]}
          demo={foodVeggie}
          repo="https://github.com/camila-pereyra/food-veggie-pereyra-react"
          deploy="https://food-veggie-pereyra-react.vercel.app/"
        />
        <Project
          tittle="Calculator"
          skills={[html, css, js, react]}
          demo={calculator}
          repo="https://github.com/camila-pereyra/calculator"
          deploy="https://calculator-pearl-beta.vercel.app/"
        />
        <Project
          tittle="Faqam"
          skills={[html, css, js, boostrap]}
          demo={faqam}
          repo="https://github.com/camila-pereyra/faqam-vw-concesionaria"
          deploy="https://camila-pereyra.github.io/faqam-vw-concesionaria/"
        />
        <Project
          tittle="TA-TE-TI"
          skills={[html, css, js, react]}
          demo={tateti}
          repo="https://github.com/camila-pereyra/ta-te-ti"
          deploy="https://ta-te-ti-seven.vercel.app/"
        />
        <Project
          tittle="Dale Mas Afro"
          skills={[html, css, js, sass]}
          demo={dalemasafro}
          repo="https://github.com/camila-pereyra/proyecto-DaleMasAfro"
          deploy="https://evento.dalemasafro.org/"
        />
        <Project
          tittle="Weather App"
          skills={[html, css, js, react]}
          demo={weather}
          repo="https://github.com/camila-pereyra/weather-app"
          deploy="https://weather-app-alpha-pied-46.vercel.app/"
        />
        <Project
          tittle="Todo"
          skills={[html, css, js, react]}
          demo={task}
          repo="https://github.com/camila-pereyra/todo"
          deploy="https://todo-alpha-vert.vercel.app/"
        />
        <Project
          tittle="M&C"
          skills={[html, css, sass]}
          demo={myc}
          repo="https://github.com/camila-pereyra/petshop-MyC"
          deploy="https://camila-pereyra.github.io/petshop-MyC/"
        />
      </div>
    </section>
  );
};

export default ContainerProjects;

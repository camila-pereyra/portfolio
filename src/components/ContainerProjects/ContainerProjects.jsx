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
import bootstrap from "../../image/bs.png";
import salesforce from "../../image/salesforce.png";
import localStorage from "../../image/localStorage.png";
import responsive from "../../image/responsive.png";
import Project from "../Project/Project";
const ContainerProjects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="tittleSection">Proyectos</h2>
      <div className="containerProjects">
        <Project
          tittle="Food Veggie"
          skills={[html, css, js, react, firebase, responsive]}
          demo={foodVeggie}
          repo="https://github.com/camila-pereyra/food-veggie-pereyra-react"
          deploy="https://food-veggie-pereyra-react.vercel.app/"
          description="Ecommerce construido con React JS. Carga de productos desde la base de datos Firebase. Asímismo, Firebase es utilizada para almacenar las ordenes de compra que se generan en el sitio web. Diseño totalmente responsive. Uso de useState, useEffect y useContext. React router dom para crear rutas a los subdominios.           "
        />
        <Project
          tittle="Calculator"
          skills={[html, css, js, react, responsive]}
          demo={calculator}
          repo="https://github.com/camila-pereyra/calculator"
          deploy="https://calculator-pearl-beta.vercel.app/"
          description="Aplicación web que simula una calculadora creada con React JS y Javascript. Implementación de mediaqueries para lograr un diseño totalmente responsive. Utilización de useState para manejar el estado de los componentes."
        />
        <Project
          tittle="Faqam"
          skills={[html, css, js, , bootstrap, localStorage, responsive]}
          demo={faqam}
          repo="https://github.com/camila-pereyra/faqam-vw-concesionaria"
          deploy="https://camila-pereyra.github.io/faqam-vw-concesionaria/"
          description="Proyecto final del curso de Javascript. Sitio web de una agencia de autos. Utilización de Bootstrap acompañado de CSS para personalizar las intrerfaces y realizar un diseño responsive y escalable en cualquier dispositivo."
        />
        <Project
          tittle="TA-TE-TI"
          skills={[html, css, js, react, responsive]}
          demo={tateti}
          repo="https://github.com/camila-pereyra/ta-te-ti"
          deploy="https://ta-te-ti-seven.vercel.app/"
          description="Juego TATETI creado con React JS y Javascript. Utilización de props y hooks para manejar las variables y el estado de los componentes. Creación de animaciones para mostrar la situación final de la partida (ganador X | ganador O | empate)."
        />
        <Project
          tittle="Dale Mas Afro"
          skills={[html, css, js, sass, salesforce, responsive]}
          demo={dalemasafro}
          repo="https://github.com/camila-pereyra/proyecto-DaleMasAfro"
          deploy="https://evento.dalemasafro.org/"
          description="Proyecto freelance para el programa Dale Más Afro de Impacto Digital. Landing page para viralizar e inscribirse al evento Dale Más Afo. Utilización de SalesForce para el envío del formulario. Uso de Sass con variables, selectores anidados, herencia, para darle más practicidad a los estilos de los elementos."
        />
        <Project
          tittle="Weather App"
          skills={[html, css, js, react, responsive]}
          demo={weather}
          repo="https://github.com/camila-pereyra/weather-app"
          deploy="https://weather-app-alpha-pied-46.vercel.app/"
          description="Aplicación del clima creada con React JS y Javascript. Utiliza geolocation para acceder a la ubicación del usuario y mostrar el clima y pronóstico (por hora) en dicha localización. Promesas (asincrónicas) a la API Open Weather Map. Manejo de hooks: useState y useEffect en componentes. Diseño responsive."
        />
        <Project
          tittle="Todo"
          skills={[html, css, js, react, responsive]}
          demo={task}
          repo="https://github.com/camila-pereyra/todo"
          deploy="https://todo-alpha-vert.vercel.app/"
          description="Proyecto que representa un anotador, una lista de tareas. Creado con React JS y Javascript. Utilización de useState para manejar el estado de los componentes. Implementación de mediaqueries para lograr un diseño totalmente responsive. "
        />
        <Project
          tittle="M&C"
          skills={[html, css, sass, responsive]}
          demo={myc}
          repo="https://github.com/camila-pereyra/petshop-MyC"
          deploy="https://camila-pereyra.github.io/petshop-MyC/"
          description="Proyecto final del curso de Desarrollo Web. Contiene +10 simple pages. Utilización de Sass con variables, selectores anidados, herencia, para darle más practicidad a los estilos de los elementos. El diseño fue creado mediante CSS y es responsive, escalable en cualquier dispositivo. Uso de animaciones y transiciones para efectos visuales-estéticos."
        />
      </div>
    </section>
  );
};

export default ContainerProjects;

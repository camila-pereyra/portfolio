import "./ContanerAboutMe.css";
import "../../App.css";
const ContanerAboutMe = () => {
  return (
    <section id="aboutMe" className="section">
      <h2 className="tittleSection">Sobre mi</h2>
      <p className="aboutMeParagraph">
        Soy estudiante de la carrera Licenciatura en Sistemas en la UNLa,
        actualmente cursando las últimas materias de 2do año. Al comenzar la
        universidad descubrí que me apasiona el mundo de la tenología, la
        programación y me encantaría abarcar la mayor cantidad de conocimientos
        posible.{" "}
      </p>
      <p className="aboutMeParagraph">
        Durante el año 2022, emprendí el desafío de realizar varios cursos,
        algunos relacionados al desarrollo frontend: Desarrollo Web, Javascript
        y React JS y uno relacionado al testing: Tester Funcional Manual.
        Gracias a los mismos, hoy soy Frontend Developer ReactJS y Tester QA
        Funcional Manual. Proximamente, iniciaré un curso de programación
        Backend para poder seguir ampliando mis conocimientos y convertirme en
        desarolladora Fullstack.
      </p>
      <p className="aboutMeParagraph">
        Respecto al ámbito laboral, tengo experiencia freelance desarrollando
        sitios web. Allí pude poner en práctica y potenciar aún más mis
        conocimientos técnicos y mis habilidades en equipo. Me considero una
        persona responsable, proactiva, comunicativa, colaborativa, autodidacta
        y con muchas ganas de seguir aprendiendo y creciendo en este mundo IT
        que tanto me gusta.
      </p>
    </section>
  );
};

export default ContanerAboutMe;

import ButtonCV from "../ButtonCV/ButtonCV";
import TextAnimated from "../TextAnimated/TextAnimated";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="containerHero">
      <div className="containerInfo">
        <h1 className="name">Camila Pereyra</h1>
        <div>
          <TextAnimated />
        </div>
      </div>
      <ButtonCV />
    </section>
  );
};

export default Hero;

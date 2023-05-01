import "./ContainerSkills.css";
import "../../App.css";
import image1 from "../../image/html.png";
import image2 from "../../image/css.png";
import image3 from "../../image/javascript.png";
import image4 from "../../image/react.png";
import image5 from "../../image/sass.png";
import image6 from "../../image/github.png";
import image7 from "../../image/bs.png";
import image8 from "../../image/firebase.png";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const ContainerSkills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="tittleSection">Skills</h2>
      <Glider
        draggable={true}
        hasArrows={false}
        hasDots={true}
        slidesToShow={2}
        slidesToScroll={2}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            },
          },
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 0,
              hasArrows: false,
              hasDots: false,
            },
          },
        ]}
      >
        <div className="skill">
          <img src={image1} alt="" />
        </div>
        <div className="skill">
          <img src={image2} alt="" />
        </div>
        <div className="skill">
          <img src={image3} alt="" />
        </div>
        <div className="skill">
          <img src={image4} alt="" />
        </div>
        <div className="skill">
          <img src={image5} alt="" />
        </div>
        <div className="skill">
          <img src={image6} alt="" />
        </div>
        <div className="skill">
          <img src={image7} alt="" />
        </div>
        <div className="skill">
          <img src={image8} alt="" />
        </div>
      </Glider>
    </section>
  );
};

export default ContainerSkills;

import "./ButtonCV.css";
import { BsDownload } from "react-icons/bs";
const ButtonCV = () => {
  return (
    <a
      className="buttonCV"
      href="../cv.pdf"
      download
      title="CV_CAMILA_PEREYRA_FRONTEND_DEVELOPER"
    >
      <p className="textButton">Descargar CV</p>
      <div className="buttonIcon">
        <BsDownload />
      </div>
    </a>
  );
};

export default ButtonCV;

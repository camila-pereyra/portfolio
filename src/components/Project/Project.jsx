import "./Project.css";

const Project = ({ tittle, skills, demo, repo, deploy }) => {
  return (
    <div className="project">
      <h4 className="tittleProject">{tittle}</h4>
      <div className="skillsProject">
        {skills.map((skill) => (
          <img src={skill} alt="" />
        ))}
      </div>
      <div className="projectImage">
        <img src={demo} alt="" />
      </div>
      <p className="projectInfo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in
        corrupti magni velit officia nam.
      </p>
      <a href={repo} className="linkProject">
        Repositorio
      </a>
      <a href={deploy} className="linkProject">
        Deploy
      </a>
    </div>
  );
};

export default Project;

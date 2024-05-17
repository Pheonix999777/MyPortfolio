import { IoIosLink } from "react-icons/io";

export const ProjectsCard = ({ img, title, text, link }) => {
  return (
    <div className="projects-box">
      <img src={img} alt="" />
      <div className="projects-info">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link} target="_blank">
          <IoIosLink className="icon-link" />
        </a>
      </div>
    </div>
  );
};

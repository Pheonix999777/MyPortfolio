import { Container } from "../../components/Container/Container";
import pht from "../../assets/imiges/4.jpg";
import pht2 from "../../assets/imiges/3.jpg";
import pht3 from "../../assets/imiges/5.jpg";
import "./style.scss";
import { ProjectsCard } from "./ProjectsCard/ProjectsCard";

export const Projects = () => {
  return (
    <section className="projects">
      <a className="anchor " id="projects"></a>
      <Container>
        <div className="heading">
          <h2 className="title">
            Some <span>Projects</span>
          </h2>
        </div>
        <div className="projects-con">
          <ProjectsCard
            img={pht}
            title={"Auto zoom"}
            text={
              "I served as a key member of the team tasked with building the AutoZoomConnect website. During this project, I implemented complex frontend solutions using React.js technology. My responsibilities include orchestrating the design of critical frontend functions and functionality aimed at enhancing the overall user experience."
            }
            link={"https://www.autozoomconnect.uz/"}
          />

          <ProjectsCard
            img={pht2}
            title={"Dezinfeksiya"}
            text={
              "Modern React.js methodologies have been used to significantly improve code quality and  stability, resulting in a more robust and reliable disinfection site platform"
            }
            link={"https://puredisinfect.uz/"}
          />

          <ProjectsCard
            img={pht3}
            title={"ATAEV BAHODIR BUILD"}
            text={
              "Used i18next and Sass technologies to create a dynamic and versatile building platform that   provides seamless internationalization and a modern, customizable style"
            }
            link={"https://buildgenius.uz/"}
          />

          <ProjectsCard
            img={pht2}
            title={"Auto zoom Admin Panel"}
            text={
              "Spearheaded database management initiatives, optimizing data storage and retrieval processes to ensure the timely and reliable management of critical information"
            }
            link={"https://adminpanel-three-woad.vercel.app/"}
          />

          <ProjectsCard
            img={pht}
            title={"Countries"}
            text={
              "A sophisticated graphic filter with built-in light and dark mode functionality has been developed to provide users with an optimal viewing experience in all lighting conditions. The filter features dynamic mode switching that provides seamless transitions and increases ease of use and convenience."
            }
            link={"https://react-countries-iota.vercel.app/"}
          />
        </div>
      </Container>
    </section>
  );
};

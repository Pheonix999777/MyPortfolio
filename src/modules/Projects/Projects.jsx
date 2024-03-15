import { Container } from "../../components/Container/Container";
import { IoIosLink } from "react-icons/io";
import pht from "../../assets/imiges/4.jpg";
import pht2 from "../../assets/imiges/3.jpg";
import pht3 from "../../assets/imiges/5.jpg";
import "./style.scss";

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
          <div className="projects-box">
            <img src={pht} alt="" />
            <div className="projects-info">
              <h3>Grafic Dasigner</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
                dolores eligendi. Eum ex officia, tempora est quisquam amet enim
                quidem earum ad asperiores error consectetur incidunt sed
                dignissimos illum!
              </p>
              <a href="#">
                <IoIosLink className="icon-link" />
              </a>
            </div>
          </div>

          <div className="projects-box">
            <img src={pht2} alt="" />
            <div className="projects-info">
              <h3>Grafic Dasigner</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
                dolores eligendi. Eum ex officia, tempora est quisquam amet enim
                quidem earum ad asperiores error consectetur incidunt sed
                dignissimos illum!
              </p>
              <a href="#">
                <IoIosLink className="icon-link" />
              </a>
            </div>
          </div>

          <div className="projects-box">
            <img src={pht3} alt="" />
            <div className="projects-info">
              <h3>Grafic Dasigner</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cum
                dolores eligendi. Eum ex officia, tempora est quisquam amet enim
                quidem earum ad asperiores error consectetur incidunt sed
                dignissimos illum!
              </p>
              <a href="#">
                <IoIosLink className="icon-link" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

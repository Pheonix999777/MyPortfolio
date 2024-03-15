import { useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const Skills = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 80) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <section className="skills">
      <a className="anchor " id="skills"></a>
      <Container>
        <div className="flexCenter">
          <div className="main-text">
            <h2 className="title">
              My <span>Skills</span>
            </h2>
          </div>
          <div className="skill-main">
            <div className="skill-left">
              <h3>Language</h3>
              <div className="skill-box">
                <div className="skill-bar">
                  <div className="info">
                    <p>HTML</p>
                    <p>80%</p>
                  </div>
                  <div className="bar">
                    <span className="html"></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>CSS</p>
                    <p>80%</p>
                  </div>
                  <div className="bar">
                    <span className="css"></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>JavaScript</p>
                    <p>70%</p>
                  </div>
                  <div className="bar">
                    <span className="javascript"></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>React</p>
                    <p>60%</p>
                  </div>
                  <div className="bar">
                    <span className="react"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-right">
              <h3>Language</h3>
              <div className="skill-box">
                <div className="skill-bar">
                  <div className="info">
                    <p>SASS/SCSS</p>
                    <p>70%</p>
                  </div>
                  <div className="bar">
                    <span className="sass"></span>
                  </div>
                </div>
                <div className="skill-bar">
                  <div className="info">
                    <p>Redux/ReduxToolkit</p>
                    <p>50%</p>
                  </div>
                  <div className="bar">
                    <span className="redux"></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>Ckakra UI</p>
                    <p>60%</p>
                  </div>
                  <div className="bar">
                    <span className="ckakra"></span>
                  </div>
                </div>

                <div className="skill-bar">
                  <div className="info">
                    <p>mobx</p>
                    <p>40%</p>
                  </div>
                  <div className="bar">
                    <span className="mobx"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <a className="anchor" id="portfolio"></a>
    </section>
  );
};

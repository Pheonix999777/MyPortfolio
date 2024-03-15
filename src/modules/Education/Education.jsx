import { Container } from "../../components/Container/Container";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./style.scss";

export const Education = () => {
  return (
    <section className="education">
      <a className="anchor " id="education"></a>
      <Container>
        <h2 className="title">
          My <span>Education</span>
        </h2>
        <div className="row">
          <div className="column">
            <h2>Education</h2>
            <div className="box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    2021-22
                    <i>
                      <FaRegCalendarAlt className="education-icon" />
                    </i>
                  </div>
                  <h3>Degree College</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium tenetur enim, deserunt libero quisquam ab eius
                    minus odio quod dicta!
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    2021-22{" "}
                    <i>
                      <FaRegCalendarAlt className="education-icon" />
                    </i>
                  </div>
                  <h3>Degree College</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium tenetur enim, deserunt libero quisquam ab eius
                    minus odio quod dicta!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <h2>Education</h2>
            <div className="box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    2021-22
                    <i>
                      <FaRegCalendarAlt  className="education-icon" />
                    </i>
                  </div>
                  <h3>Degree College</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium tenetur enim, deserunt libero quisquam ab eius
                    minus odio quod dicta!
                  </p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    2021-22
                    <i>
                      <FaRegCalendarAlt className="education-icon" />
                    </i>
                  </div>
                  <h3>Degree College</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium tenetur enim, deserunt libero quisquam ab eius
                    minus odio quod dicta!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

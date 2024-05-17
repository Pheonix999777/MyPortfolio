import img from "../../assets/imiges/MdSay1.png";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const About = () => {
  return (
    <section className="about">
      <a className="anchor " id="about"></a>
      <Container>
        <div className="about-div">
          <h2 className="title">
            About <span>Me</span>
          </h2>
          <img src={img} alt="" className="aboutImg" />
          <div className="about-wrapper">
            <h2>Frontend Developer</h2>
            <p>
              Contributed to autozoom website development as a core team member,
              used Next.js for front-end development. Played a critical role in
              designing and implementing user-centric frontend features and
              functionality to significantly improve user experience. Gained
              extensive hands-on experience with Next.js, especially server-side
              rendering and dynamic routing, resulting in performance and SEO
              improvements.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

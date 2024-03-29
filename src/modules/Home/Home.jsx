import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";
import homeImg from "../../assets/imiges/MdSay.png";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const Home = () => {
  return (
    <section className="home">
      <Container>
        <a className="anchor " id="home"></a>

        <div className="home-div">
          <div className="text-content">
            <h1>I&apos;m Usmon</h1>
            <div className="text-animation">
              <h2>Frontend Developer</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              illum! Libero cupiditate sunt officiis laudantium inventore vero,
              praesentium iure accusantium asperiores nobis architecto qui
              maiores, debitis at, eaque vel! Officiis, vel reprehenderit dicta
              cumque doloremque qui. Autem aperiam cumque aliquid.
            </p>
            <div className="btn-section">
              <button className="btn">Downdload CV</button>
              <button className="btn">Let&apos;s Talk</button>
            </div>
            <div className="social-media">
              <a href="#">
                <i>
                  {" "}
                  <FaGithub />
                </i>
              </a>
              <a href="#">
                <i>
                  {" "}
                  <FaDribbble />
                </i>
              </a>
              <a href="#">
                <i>
                  {" "}
                  <FaTwitter />
                </i>
              </a>
            </div>
          </div>
          <img src={homeImg} alt="" />
        </div>
      </Container>
    </section>
  );
};

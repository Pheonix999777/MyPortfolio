import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import homeImg from "../../assets/imiges/MdSay1.png";
import { Container } from "../../components/Container/Container";
import Resume from "../../components/Download/Resume.pdf";
import "./style.scss";

export const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = Resume;

    link.download = "resume.pdf";

    link.click();
  };

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
              Experienced frontend developer specializing in creating modern web
              applications. React.js, Next.js and experience delivering
              high-quality, responsive user interfaces. Exceptional
              problem-solving skills combined with a desire to stay abreast of
              the latest web technologies drive constant innovation in frontend
              development.
            </p>
            <div className="btn-section">
              <button className="btn" onClick={handleDownload}>
                Downdload CV
              </button>
            </div>
            <div className="social-media">
              <a
                href="https://github.com/Pheonix999777/MyPortfolio.git"
                target="_blank"
              >
                <i>
                  {" "}
                  <FaGithub />
                </i>
              </a>
              <a href="https://t.me/pheonix4777" target="_blank">
                <i>
                  {" "}
                  <FaTelegram />
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

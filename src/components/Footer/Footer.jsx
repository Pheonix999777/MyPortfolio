import { Container } from "../Container/Container";
import { FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";
import "./style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-div">
          <ul className="footer-ul">
            <li className="ul-navlist">
              <a className="ul-text" href="#home">
                FAQ
              </a>
            </li>
            <li className="ul-navlist">
              <a className="ul-text" href="#about">
                About Me
              </a>
            </li>
            <li className="ul-navlist">
              <a className="ul-text" href="#projects">
                Projects
              </a>
            </li>
            <li className="ul-navlist">
              <a className="ul-text" href="#education">
                Education
              </a>
            </li>
            <li className="ul-navlist">
              <a className="ul-text" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="icons-div">
            {" "}
            <a href="" className="footer-icon">
              {" "}
              <FaGithub />
            </a>{" "}
            <a href="" className="footer-icon">
              <FaTwitter />
            </a>{" "}
            <a href="" className="footer-icon">
              {" "}
              <FaDribbble />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Container } from "../Container/Container";
import { useEffect, useState } from "react";
import "./style.scss";

export const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <Container>
        <div className="header-div">
          <a className="logo" href="#">
            {" "}
            <span>U</span>smon{" "}
          </a>
          <nav className={`nav  ${showNavbar && "active"}`}>
            <ul className="navlist">
              <li className="navlist-li" onClick={handleShowNavbar}>
                <a className="navlist-text" href="#home">
                  Home
                </a>
              </li>
              <li className="navlist-li" onClick={handleShowNavbar}>
                <a className="navlist-text" href="#about">
                  About
                </a>
              </li>
              <li className="navlist-li" onClick={handleShowNavbar}>
                <a className="navlist-text" href="#skills">
                  Skills
                </a>
              </li>
              <li className="navlist-li" onClick={handleShowNavbar}>
                <a className="navlist-text" href="#projects">
                  Projects
                </a>
              </li>
              <li className="navlist-li" onClick={handleShowNavbar}>
                <a className="navlist-text" href="#education">
                  Education
                </a>
              </li>
              <li className="navlist-li" onClick={handleShowNavbar}>
                <a className="navlist-text" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="header-btn"
            id="menu-icon"
            onClick={handleShowNavbar}
          >
            {showNavbar ? <IoClose /> : <IoMdMenu />}
          </button>
        </div>
      </Container>
    </header>
  );
};

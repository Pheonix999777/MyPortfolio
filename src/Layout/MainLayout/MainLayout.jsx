import { About } from "../../modules/About/About";
import { Contact } from "../../modules/Contact/Contact";
import { Education } from "../../modules/Education/Education";
import { Home } from "../../modules/Home/Home";
import { Projects } from "../../modules/Projects/Projects";
import { Skills } from "../../modules/Skills/Skills";

export const MainLayout = () => {
  return (
    <article>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </article>
  );
};

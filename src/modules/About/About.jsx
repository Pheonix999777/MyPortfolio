import img from "../../assets/imiges/MdSay.png";
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              asperiores molestiae nemo ipsam porro nam nesciunt repudiandae
              voluptates blanditiis soluta eum, tempora explicabo optio corrupti
              ullam quidem magnam quaerat qui dolorem architecto in dignissimos!
              Nostrum fugit, modi sed fugiat possimus maxime voluptates ea
              molestiae animi, nesciunt inventore libero hic. Consectetur
              praesentium facere aut perspiciatis voluptate. Nam sunt
              perspiciatis quasi rem.
            </p>
            <button className="btn">Read More</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

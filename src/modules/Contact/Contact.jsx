import { Container } from "../../components/Container/Container";
import "./style.scss";

export const Contact = () => {
  return (
    <section className="contact-section">
      <a className="anchor " id="contact"></a>
      <Container>
        <h2 className="contact-title">
          Contact<span>Me</span>
        </h2>
        <form className="contact-form" action="#" id="">
          <div className="input-box">
            <input type="text" required placeholder="Full Name" />
            <input type="email" name="email" required placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="tel" name="tel" required placeholder="Mobile Number" />
            <input type="text" required placeholder="Subject" />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>

          <button className="contact-btn" type="submit">
            Send Message
          </button>
        </form>
      </Container>
    </section>
  );
};

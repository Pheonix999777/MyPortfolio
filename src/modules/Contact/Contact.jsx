import { useState } from "react";
import { Container } from "../../components/Container/Container";
import "./style.scss";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [commit, setCommit] = useState("");

  const token = "7183149447:AAGVUY8rHtWLmvWrUmn_KRpNZ8oyxcX8LiI";
  const chatId = 1124566830;

  const sendMessage = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${tel}\nMessage: ${message}\nCommit: ${commit}`,
          }),
        }
      );

      if (response.ok) {
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message:", response.status);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
    setName("");
    setEmail("");
    setTel("");
    setMessage("");
    setCommit("");
  };

  return (
    <section className="contact-section">
      <a className="anchor " id="contact"></a>
      <Container>
        <h2 className="contact-title">
          Contact<span>Me</span>
        </h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="tel"
              name="tel"
              required
              placeholder="Mobile Number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Subject"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={commit}
            onChange={(e) => setCommit(e.target.value)}
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

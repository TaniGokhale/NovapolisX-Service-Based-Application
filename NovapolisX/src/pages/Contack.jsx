import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/contact.css";

function Contack() {

  return (

    <div className="contact-page">

      <Navbar />

      <section className="contact-hero">

        <img
          src="https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif"
          alt=""
          className="contact-bg"
        />

        <div className="contact-overlay"></div>

        <div className="contact-content">

          <h1>
            Contact
            <span> Us</span>
          </h1>

          <p>
            Connect with NovapolisX
            Smart City Platform.
          </p>

        </div>

      </section>

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-left">

            <h2>
              Get In Touch
            </h2>

            <p>
              Have questions or suggestions?
              Contact our smart city team.
            </p>

            <div className="contact-info">

              <div className="info-box">
                <h3>📍 Location</h3>
                <p>Nagpur, Maharashtra</p>
              </div>

              <div className="info-box">
                <h3>📧 Email</h3>
                <p>support@novapolisx.com<br/>tanishagokhale03gmail.com</p>
                

              </div>

              <div className="info-box">
                <h3>📞 Phone</h3>
                <p>+91 7559227187</p>
              </div>

            </div>

          </div>

          <div className="contact-right">

      <form
  className="contact-form"
  action="https://api.web3forms.com/submit"
  method="POST"
>

  <input
    type="hidden"
    name="access_key"
    value="e07c1050-acb3-4b1d-b7b9-39164e1d9776"
  />

  <input
    type="hidden"
    name="Succesfully send"
    value="http://localhost:5173/contact"
  />

  <input
    type="text"
    name="name"
    placeholder="Enter Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Enter Your Email"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />

  <textarea
    rows="6"
    name="message"
    placeholder="Write Your Message"
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</form>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contack;
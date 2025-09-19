import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2tidi97",   // replace with your EmailJS Service ID
        "template_evqx2ta",  // replace with your EmailJS Template ID
        form.current,
        "bW45YotvtQKSumU3S"    // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact__container">

        {/* Left Info */}
        <div className="contact__info">
          <p className="contact__subtitle">Let's work together</p>
          <p className="contact__description">
            I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about design and development, I'd love to hear from you!
          </p>

          <div className="contact__details">
            <div className="contact__card">
              <i className='bx bxs-phone'></i>
              <div>
                <h3>Phone</h3>
                <p>+91 7016693435</p>
              </div>
            </div>
            <div className="contact__card">
              <i className='bx bxs-envelope'></i>
              <div>
                <h3>Email</h3>
                <p>jensipatel2512@gmail.com</p>
              </div>
            </div>
            <div className="contact__card">
              <i className='bx bxs-map'></i>
              <div>
                <h3>Location</h3>
                <p>Mehsana, Gujarat, India</p>
              </div>
            </div>
          </div>

          <p className="follow-text">Follow me</p>
          <div className="contact__social">
            <a href="#"><i className='bx bxl-whatsapp'></i></a>
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact__form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="contact__form" style={{ marginTop: "100px" }}>
            <div className="form-row">
              <input type="text" name="from_name" placeholder="First Name" className="contact__input" required />
              <input type="text" name="last_name" placeholder="Last Name" className="contact__input" required />
            </div>
            <input type="email" name="from_email" placeholder="Email" className="contact__input" required /><br /><br />
            <input type="text" name="subject" placeholder="Subject" className="contact__input" required /><br /><br />
            <textarea name="message" placeholder="Message" rows="5" className="contact__input" required></textarea><br /><br />
            <button type="submit" className="contact__button"><i className='bx bxs-send'></i> Send Message</button>
          </form>
          {status && <p style={{ marginTop: "10px" }}>{status}</p>}
        </div>

      </div>
    </section>
  );
}

export default Contact;

import React from "react";
import jensi2 from "../assets/img/jensi2.jpg";
import resume from "../assets/files/Jensi (UIUX Resume).pdf";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={jensi2} alt="Jensi Patel" />
        </div>
        <div>
          <h2 className="about__subtitle">I am Jensi Patel</h2>
          <p className="about__text">
            I'm a Frontend Developer from Mehsana, Gujarat. I graduated from Ganpat University, Kherva with a degree in IoT Computer Engineering.
            <br /><br />
            I specialize in React.js, HTML, CSS, JavaScript, and UI/UX design. I love traveling and coding, and I recently completed a 4-month internship at Techmicra IT Solution as a React Developer.
          </p>
<a
  href={resume}
  download
  className="button"
  style={{ marginTop: "30px" }}
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
}

export default About;

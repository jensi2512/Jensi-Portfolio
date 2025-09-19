import React from "react";
import skillsImg from "../assets/img/work3.jpg";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Professional Skills</h2>
          <p className="skills__text">
            I create modern and responsive websites using the latest technologies. My focus is on building clean designs, smooth interactions, and great user experiences.
          </p>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-html5 skills__icon'></i>
              <span className="skills__name">HTML5</span>
            </div>
            <div className="skills__bar skills__html"></div>
            <span className="skills__percentage">95%</span>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-css3 skills__icon'></i>
              <span className="skills__name">CSS3</span>
            </div>
            <div className="skills__bar skills__css"></div>
            <span className="skills__percentage">85%</span>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-react skills__icon'></i>
              <span className="skills__name">React</span>
            </div>
            <div className="skills__bar skills__react"></div>
            <span className="skills__percentage">85%</span>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxl-javascript skills__icon'></i>
              <span className="skills__name">JavaScript</span>
            </div>
            <div className="skills__bar skills__js"></div>
            <span className="skills__percentage">65%</span>
          </div>

          <div className="skills__data">
            <div className="skills__names">
              <i className='bx bxs-paint skills__icon'></i>
              <span className="skills__name">UX/UI</span>
            </div>
            <div className="skills__bar skills__ux"></div>
            <span className="skills__percentage">85%</span>
          </div>
        </div>

        <div>
          <img src={skillsImg} alt="Skills" className="skills__img" />
        </div>
      </div>
    </section>
  );
}

export default Skills;

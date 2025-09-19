import React from "react";

function EducationInterests() {
  return (
    <section className="education-interests">
      <h2 className="section-title">Education & Interests</h2>
      <div className="education-interests__container">

        {/* Education Section */}
        <div className="education-interests__education">
          <div className="section-header">
            <i className='bx bxs-graduation'></i>
            <h3>Education</h3>
          </div>
          <div className="education-list">
            <div className="education-card">
              <div className="education-date">2022 - 2025</div>
              <div className="education-info">
                <p>Bachelor of Technology in Computer Engineering</p>
                <p>Ganpat University</p>
              </div>
            </div>
            <div className="education-card">
              <div className="education-date">2022 - 2025</div>
              <div className="education-info">
                <p>Diploma in Computer Engineering</p>
                <p>Ganpat University</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="education-interests__interests">
          <div className="section-header">
            <i className='bx bxs-heart'></i>
            <h3>Hobbies & Interests</h3>
          </div>
          <div className="interests-list">
            <div className="interest-item">Traveling to new places</div>
            <div className="interest-item">Listening to music for relaxation</div>
            <div className="interest-item">Sports</div>
            <div className="interest-item">Photography</div>
            <div className="interest-item">Create Designing</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default EducationInterests;

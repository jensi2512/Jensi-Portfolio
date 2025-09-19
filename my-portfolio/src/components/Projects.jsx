import React, { useState } from "react";
import project1 from "../assets/img/Index.png";
import project2 from "../assets/img/Car_rental.png";
import project3 from "../assets/img/LAM.jpg";
import project4 from "../assets/img/Tonsorium_Twit.png";
import project5 from "../assets/img/seedly1.png";

const projectsData = [
  { id: 1, title: "Portfolio", year: 2025, description: "A personal portfolio website showcasing my skills.", tags: ["HTML", "CSS", "JavaScript"], img: project1, github: "https://github.com/jensi2512/Portfolio", type: "web" },
  { id: 2, title: "Online Car Rental System", year: 2023, description: "Frontend for a car rental system.", tags: ["HTML", "CSS", "JavaScript"], img: project2, github: "https://github.com/jensi2512/Car-rental-system", type: "web" },
  { id: 3, title: "Leave Application Management", year: 2024, description: "Frontend for a student leave application platform.", tags: ["HTML", "CSS", "JavaScript"], img: project3, github: "https://github.com/jensi2512/Leave-Management-System", type: "web" },
  { id: 4, title: "Tonsorium Twit", year: 2025, description: "Barbershop booking platform.", tags: ["React"], img: project4, github: "#", type: "web" },
  { id: 5, title: "Seedly", year: 2024, description: "Smart agriculture platform.", tags: ["HTML", "CSS", "JavaScript"], img: project5, github: "https://github.com/jensi2512/Seedly", type: "web" },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" ? projectsData : projectsData.filter(p => p.type === filter);

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">A showcase of my technical projects and contributions</p><br/>

      <div className="projects__filters">
        <button className={`filter-btn ${filter==="all"?"active":""}`} onClick={() => setFilter("all")}>All</button>
        <button className={`filter-btn ${filter==="web"?"active":""}`} onClick={() => setFilter("web")}>Web App</button>
      </div>

      <div className="projects__container bd-grid">
        {filteredProjects.map(p => (
          <div className="project-card" key={p.id}>
            <div className="project-content">
              <div className="project-header">
                <h3>{p.title}</h3>
                <span className="project-year">{p.year}</span>
              </div>
              <p>{p.description}</p>
              <div className="project-tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-footer">
                <a href={p.github} className="github-link"><i className='bx bxl-github'></i> GitHub</a>
                <a href={p.github} className="view-more"><i className='bx bx-right-arrow-alt'></i></a>
              </div>
            </div>
            <div className="project-image">
              <img src={p.img} alt={p.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

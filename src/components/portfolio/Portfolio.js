import React from "react";
import "./portfolio.css";
import data from "../../port-data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map((project) => (
          <article key={project.id} className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio-item-cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Site
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

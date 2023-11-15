import React from "react";
import SkillsCarousel from "./SkillsCarousel";

const Home: React.FC = () => {
  return (
    <div className="my-auto col-11 col-md-11 col-lg-8 col-xxl-7 text-light">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="fw-bold display-3">Gerardo HUERTA,</h1>
          <p>
            Highly motivated software engineer with 4 years of experience in
            software development. Skilled in JavaScript, Python, SQL, and
            HTML/CSS. Experienced in creating full stack applications with
            React, Node, and Express. I am excited to embark on a rewarding
            journey in a dynamic and growth-oriented environment where I can
            contribute to building innovative and impactful solutions.
          </p>
          <p>
            <a
              className="btn"
              href="https://www.linkedin.com/in/gerardo-huerta-11b984a5/"
            >
              <i className="bi bi-linkedin h5"></i>
            </a>
            <a className="btn" href="https://github.com/gerardoh13">
              <i className="bi bi-github h5"></i>
            </a>
            <a className="btn" href="mailto:gerardoh13@gmail.com">
              <i className="bi bi-envelope-at h5"></i>
            </a>
          </p>
        </div>
        <div className="col">
          <SkillsCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import SkillsCarousel from "./SkillsCarousel";

function Home() {
  return (
    <div className="my-auto col-11 col-md-11 col-lg-8 col-xxl-7 text-light">
    <div className="row">
      <div className="col-12 col-md-8">
        <h1 className="fw-bold display-3">Gerardo HUERTA,</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Corrupti, rerum. Debitis accusantium deleniti enim iste
          dignissimos? Similique, exercitationem! Odit vero, numquam quae
          ratione maxime sunt reiciendis laudantium quaerat iure ipsum!
        </p>
        <p>
          <a className="btn" href="https://www.linkedin.com/in/gerardo-huerta-11b984a5/">
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
}

export default Home;

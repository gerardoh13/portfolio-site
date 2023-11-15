
function Projects() {
  const projects = [
    {
      title: "Bably",
      gblink: "https://github.com/gerardoh13/react-bably",
      liveLink: "https://bably.surge.sh/",
      description:
        "A mobile-first, full stack application designed to help parents keep track of their baby's daily activities, set reminders for upcoming feeding times, and provide developmental milestones parents should expect to see from ages 2 to 12 months.",
      stack: ["JavaScript", "Node", "Express", "Eeact", "SQL"],
    },
    {
      title: "Smartnosis",
      gblink: "https://github.com/gerardoh13/react-bably",
      liveLink: "https://bably.surge.sh/",
      description:
        "A mobile-first, full stack application designed to help parents keep track of their baby's daily activities, set reminders for upcoming feeding times, and provide developmental milestones parents should expect to see from ages 2 to 12 months.",
      stack: ["JavaScript", "Node", "Express", "Eeact", "SQL"],
    },
    {
      title: "Connect-4",
      gblink: "https://github.com/gerardoh13/react-bably",
      liveLink: "https://bably.surge.sh/",
      description:
        "A mobile-first, full stack application designed to help parents keep track of their baby's daily activities, set reminders for upcoming feeding times, and provide developmental milestones parents should expect to see from ages 2 to 12 months.",
      stack: ["JavaScript", "Node", "Express", "Eeact", "SQL"],
    },
  ];

  const getLogos = (tech: string) => {
    return (
      <span className="badge text-bg-light mx-1" key={tech}>
        {tech}
      </span>
    );
  };
  const projectCards = projects.map((p) => (
    <div key={p.title} className="col-12 col-sm-6 mb-3">
      <div className="card text-bg-dark">
        <div className="card-body">
          <h5 className="card-title">
            {p.title}
            <span className="float-end">
              <a href={p.gblink} className="btn">
                <i className="bi bi-github h5"></i>
              </a>
            </span>
          </h5>
          <hr />
          <p className="card-text">{p.description}</p>
          <hr />
          {p.stack.map(getLogos)}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="mt-4 col-11 col-md-11 col-lg-8 col-xxl-7 text-light">
      <h1 className="fw-bold display-3 text-center">Projects</h1>
      <div className="mt-4 row">{projectCards}</div>
    </div>
  );
}

export default Projects;

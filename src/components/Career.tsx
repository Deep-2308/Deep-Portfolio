import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Full Stack Developer</h4>
                <h5>CoBalance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building a Fintech SaaS platform from the ground up using the MERN
              stack and Supabase. Engineered a real-time ledger system that
              handles complex expense splitting while enforcing strict security
              protocols to prevent data leaks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence Intern</h4>
                <h5>1Stop.ai</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Collaborated with a remote team to build and test Python scripts
              for automated data processing. Cleaned and optimized large-scale
              datasets for machine learning pipelines and documented system
              architecture for the team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Partnered with startup clients to architect and deploy custom web
              applications. Specialized in migrating legacy codebases to modern
              React environments and conducting security audits to patch
              vulnerabilities before launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

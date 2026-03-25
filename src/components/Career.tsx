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
                <h4>Software Developer</h4>
                <h5>CitiusTech Inc</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Built scalable backend services using Django, Flask, and Node.js,
              developed REST and GraphQL APIs, and supported cloud-native
              deployments on AWS with Docker, ECS, and CI/CD pipelines for
              enterprise applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Intern - Research Associate</h4>
                <h5>Bronx Community College CUNY</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Engineered Python-based ETL pipelines and backend processing
              services for research workflows, improving data validation,
              reporting accuracy, and reproducibility through containerized
              preprocessing and analytics integration.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>UnitedHealth Group</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Developing high-scale backend services in Golang and Python for
              healthcare systems, building AWS-based microservices, optimizing
              large-scale data pipelines, and delivering secure APIs that power
              real-time analytics and operational workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

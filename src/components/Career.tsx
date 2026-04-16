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
                <h4>AI Engineer</h4>
                <h5>UnitedHealth Group - USA</h5>
              </div>
              <h3>Aug 2025 - Present</h3>
            </div>
            <p>
              Architected and deployed LLM-powered healthcare support solutions,
              hybrid RAG-based clinical retrieval systems, predictive risk
              models, and distributed MLOps pipelines on AWS to improve
              operational efficiency, real-time clinical insight delivery, and
              production AI reliability at scale.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>CitiusTech Inc - India</h5>
              </div>
              <h3>May 2021 - Jul 2023</h3>
            </div>
            <p>
              Built machine learning and clinical analytics platforms using
              XGBoost, logistic regression, MLflow, AWS SageMaker, and
              FHIR/HL7-based data pipelines, enabling scalable patient outcome
              prediction, population health insights, real-time monitoring, and
              cost-efficient production inference workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

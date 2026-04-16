import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workItems = [
  {
    id: "01",
    title: "LLM-Powered Healthcare Chatbots",
    category: "UnitedHealth Group",
    tools: "GPT-4, NLP, Healthcare AI, Automation",
    image: "/images/LLM-PoweredHealthcareChatbots.webp",
  },
  {
    id: "02",
    title: "Hybrid RAG Clinical Retrieval",
    category: "AI Engineer",
    tools: "RAG, EHR, Vector Search, Real-Time Querying",
    image: "/images/HybridRAGClinicalRetrieval.webp",
  },
  {
    id: "03",
    title: "Predictive Risk Stratification",
    category: "Healthcare ML",
    tools: "XGBoost, Deep Learning, Claims Data, EHR",
    image: "/images/PredictiveRiskStratification.png",
  },
  {
    id: "04",
    title: "Distributed MLOps Pipelines",
    category: "Production AI Systems",
    tools: "PySpark, SQL, Apache Airflow, AWS",
    image: "/images/Distributed MLOps Pipelines.jpg",
  },
  {
    id: "05",
    title: "Clinical Risk & Outcome Models",
    category: "CitiusTech Inc",
    tools: "XGBoost, Logistic Regression, Clinical Analytics",
    image: "/images/ClinicalRisk&OutcomeModels.png",
  },
  {
    id: "06",
    title: "FHIR/HL7 Data Pipelines",
    category: "Machine Learning Engineer",
    tools: "FHIR, HL7, SageMaker, MLflow, AWS",
    image: "/images/FHIR-HL7DataPipelines.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {workItems.map((item) => (
            <div className="work-box" key={item.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{item.id}</h3>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

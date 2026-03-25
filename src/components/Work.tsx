import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const workItems = [
  {
    id: "01",
    title: "Healthcare Backend Platform",
    category: "UnitedHealth Group",
    tools: "Go, Python, AWS, PostgreSQL, PySpark, Docker",
    image: "/images/UnitedHealth.png",
  },
  {
    id: "02",
    title: "Cloud-Native Microservices",
    category: "Distributed Systems",
    tools: "AWS ECS, Lambda, RDS, Docker, REST APIs, Microservices",
    image: "/images/Cloud-Native.png",
  },
  {
    id: "03",
    title: "Analytics & Data Pipelines",
    category: "Data Engineering",
    tools: "PySpark, Pandas, NumPy, SQL, ETL Development",
    image: "/images/Analytics.jpg",
  },
  {
    id: "04",
    title: "Research Data Automation",
    category: "Bronx Community College CUNY",
    tools: "Python, ETL Pipelines, Docker, Data Validation, Analytics",
    image: "/images/Research.png",
  },
  {
    id: "05",
    title: "Enterprise API Engineering",
    category: "CitiusTech Inc",
    tools: "Django, Flask, Node.js, GraphQL, REST APIs, JWT",
    image: "/images/Enterprise.png",
  },
  {
    id: "06",
    title: "Scalable Backend Integrations",
    category: "Enterprise Applications",
    tools: "Node.js, Cassandra, PostgreSQL, AWS, CI/CD, Git",
    image: "/images/Scalable.png",
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

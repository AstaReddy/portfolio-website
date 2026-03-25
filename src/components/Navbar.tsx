import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const links = document.querySelectorAll(".header ul a");
    const handleClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const section = target.getAttribute("data-href");

        if (!section) return;

        document.querySelector(section)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    links.forEach((elem) => {
      elem.addEventListener("click", handleClick);
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((elem) => {
        elem.removeEventListener("click", handleClick);
      });

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/images/ProfilePicture.JPG" alt="Gurukiran logo" />
        </a>
        <a
          href="mailto:reddykasireddy714@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          reddykasireddy714@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

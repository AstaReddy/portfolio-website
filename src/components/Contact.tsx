import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:reddykasireddy714@gmail.com"
                data-cursor="disable"
              >
                reddykasireddy714@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+18486284851" data-cursor="disable">
                +1 (848) 628-4851
              </a>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AstaReddy"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/gurukiran-reddy-kasireddy-a8a056170/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Let&apos;s build intelligent, scalable <br /> software together.
            </h2>
            <h5>
              <MdCopyright /> 2026 Gurukiran Reddy Kasireddy
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

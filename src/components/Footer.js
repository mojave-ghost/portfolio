import FooterIcon from "./FooterIcon";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";



const Footer = () => {
  return (
    <footer className="footer">
      <h4>Get in touch: msalinas@example.com</h4>
      <p>© 2024 - Personal Portfolio</p>
      <FooterIcon icon={<FaGithub />} text="GitHub" />
      <FooterIcon icon={<FaLinkedin/>} text="LinkedIn" />
      <FooterIcon icon={<SiFrontendmentor text="Frontend Mentor" />} />
    </footer>
  );
}
export default Footer;  
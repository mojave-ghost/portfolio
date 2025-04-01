import FooterIcon from "./FooterIcon";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";



const Footer = () => {
  return (
    <footer className="footer">
      <h4>Get in touch: msalinas@example.com</h4>
      <p>© 2025 - Personal Portfolio</p>
      <div className="relative flex justify-center items-center">
        <FooterIcon icon={<FaGithub />} text="GitHub" url="https://github.com/mojave-ghost" />
        <FooterIcon icon={<FaLinkedin/>} text="LinkedIn" url="https://linkedin.com/in/mario-salinas-0b13a7236" />
        <FooterIcon icon={<SiFrontendmentor />} text="FrontendMentor" url="https://www.frontendmentor.io/profile/marioCoding" />
      </div>
    </footer>
  );
}
export default Footer;  

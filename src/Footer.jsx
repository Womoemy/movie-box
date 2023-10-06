import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareInstagram,
  faSquareXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 py-16">
      <div className="mx-auto flex w-60 justify-between">
        <Link to="https://www.linkedin.com/in/womo-emmanuel-ebiobowei/" target="_blank">
          <FontAwesomeIcon 
            icon={faLinkedin}
            style={{ color: "#111827", height: 24, width: 24 }} 
          />
        </Link>
        <Link to="https://twitter.com/womoemy" target="_blank">
          <FontAwesomeIcon
            icon={faSquareXTwitter}
            style={{ color: "#111827", height: 24, width: 24 }}
          />
        </Link>
        <Link to="https://github.com/Womoemy" target="_blank">
          <FontAwesomeIcon 
            icon={faGithub}
            style={{ color: "#111827", height: 24, width: 24 }} 
          />
        </Link>
        <Link to="https://www.instagram.com/womoemy/" target="_blank">
          <FontAwesomeIcon
            icon={faSquareInstagram}
            style={{ color: "#111827", height: 24, width: 24 }}
          />
        </Link>
      </div>
    
      <div className="mt-9 mx-auto">
        <p className="text-center text-sm text-gray-500 font-bold">
          &copy; 2023 Womo Ebiobowei 
        </p>
        <p className="text-center text-xs text-gray-500 font-bold">
          Design by Adriana Eka Prayudha
        </p>
      </div>
    </div>
  );
};
export default Footer;

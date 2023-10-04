import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSquareXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bottom-0 py-16">
      <div className="mx-auto flex w-60 justify-between">
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ color: "#111827", height: 24, width: 24 }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: "#111827", height: 24, width: 24 }}
        />
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          style={{ color: "#111827", height: 24, width: 24 }}
        />
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ color: "#111827", height: 24, width: 24 }}
        />
      </div>
      <div className="my-9 mx-auto flex justify-between w-1/3">
        <p className="font-bold text-gray-900">Conditions of Use</p>
        <p className="font-bold text-gray-900">Privacy & Policy</p>
        <p className="font-bold text-gray-900">Press Room</p>
      </div>
      <div className="mx-auto">
        <p className="text-center text-gray-500 font-bold">
          &copy; 2023 Design by Adriana Eka Prayudha
        </p>
      </div>
    </div>
  );
};
export default Footer;

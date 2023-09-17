import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="gradient-text">ztz.dev</p>
      <div className="social-media-icons">
        <a
          href="https://twitter.com/waiyanzt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com/waiyanzawtin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/waiyan.zawtin.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <p className="copyright">
        Copyright © 2023, Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

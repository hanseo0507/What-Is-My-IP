import React from "react";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__icon">
          <a
            className="github"
            href="https://github.com/hanseo0507"
            title="HanSeo Github"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            className="discord"
            href="https://discord.gg/79fTA7q"
            title="HanSeo Discord"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
        </div>
        <div className="footer__copyright">
          <span>Copyright 2020. HanSeo. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

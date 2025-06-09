import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-[1080px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Text */}
        <div className="text-center md:text-left text-sm sm:text-base font-medium text-gray-400">
          © {new Date().getFullYear()} Lucky Ali. All rights reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/mluckyali_/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#e1306c] transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/luckyalim/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/LUCKYALI1"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

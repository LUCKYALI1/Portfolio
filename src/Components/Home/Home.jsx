import React, { useEffect, useRef } from "react";
import headerImg from "../../assets/header-img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import leetcode from "../../assets/LeetCode-Logo.png";
import gsap from "gsap";
import resumepdf from '../../assets/luckyali_resume.pdf'

function Home() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.to(imgRef.current, {
      x: 30,
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white pt-[80px] overflow-hidden bg-black bg-cover bg-center relative" id="home">
      {/* Animated Background Image */}
      <img
  ref={imgRef}
  src={headerImg}
  alt="Animated Background"
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] opacity-[0.9] pointer-events-none z-1"
  style={{ willChange: "transform" }}
/>


      {/* Main Container */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-4 flex flex-col items-center justify-center text-center min-h-[90vh]">
        {/* Top Bar */}
        <div className="w-full flex justify-between items-center flex-wrap gap-4 mb-6">
          <p className="text-black text-sm sm:text-base bg-[#60B5FF] px-5 py-2 font-bold cursor-default inline-block">
            Hi, There
          </p>
          <div className="flex gap-3 sm:gap-4 items-center">
            <a href="https://www.instagram.com/mluckyali_/" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[#e1306c]  hover:-translate-y-1 transition duration-300 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/luckyalim/" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[#0A66C2]  hover:-translate-y-1 transition duration-300 hover:scale-110" />
            </a>
            <a href="https://github.com/LUCKYALI1" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6 sm:w-8 sm:h-8 hover:text-[#b683ff]  hover:-translate-y-1 transition duration-300 hover:scale-110" />
            </a>
            <a href="https://leetcode.com/u/Luckyalim_/" aria-label="LeetCode">
              <img src={leetcode} alt="LeetCode" className="w-5 h-5 sm:w-6 sm:h-6 object-contain hover:-translate-y-1 transition duration-300 hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7rem] font-extrabold leading-[1.1] tracking-[-2px]
          bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent select-none break-words w-full">
          Programmer And Developer
        </h3>

        {/* Paragraph */}
        <p className="mt-6 text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1rem] text-gray-300 leading-relaxed md:leading-[1.8rem] font-medium max-w-[700px]">
          <span className="text-[#a9ffaa] font-extrabold text-[1.05rem] sm:text-[1.2rem] tracking-wide">Innovator,</span>{" "}
          <span className="text-[#B2A5FF] font-extrabold text-[1.05rem] sm:text-[1.2rem] tracking-wide">Thinker,</span>{" "}
          and{" "}
          <span className="text-[#7e8ad5] font-extrabold text-[1.05rem] sm:text-[1rem] tracking-wide">Problem Solver</span>{" "}
          — Beyond just writing code, I bring ideas to life through logic, creativity, and a passion for building impactful digital solutions.
        </p>

        {/* Bottom Content */}
        <div className="mt-8 text-gray-300 font-medium">
          <p className="text-base text-[1rem] tracking-tight leading-snug max-w-[700px] mx-auto">
            I thrive on challenges. With a drive to grow and inspire, I aim to leave a mark through innovation, empathy, and relentless learning.
          </p>
          <a
            href={resumepdf}
            download
            className="mt-4 inline-flex items-center justify-center w-[150px] border border-[#60B5FF] text-white px-4 py-2 hover:bg-[#60B5FF] hover:text-black transition duration-300 font-semibold"
          >
            Resume <FontAwesomeIcon icon={faDownload} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

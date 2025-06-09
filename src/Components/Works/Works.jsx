import React from "react";
import ochiImg from "../../assets/Projects/ochiClone.png";
import woodexImg from "../../assets/Projects/Woodex.png";
import TictactoeImg from "../../assets/Projects/TicTacToe.png";
import sundownImg from "../../assets/Projects/sundownClone.png";
import groupofProjects from "../../assets/Projects/groupOfProjects.png";
import '../Works/Works.css'
function Works() {
  return (
    <div className="w-full min-h-screen text-black pt-[80px] overflow-hidden bg-white pb-[4%]" id="works">
     <header className="max-w-[1080px] mx-auto px-4 text-center relative overflow-hidden mb-3">
        <div className="absolute inset-0 flex items-center justify-center sm:justify-left pointer-events-none select-none">
           <h2 className="whitespace-nowrap text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[6.5rem] font-extrabold text-black opacity-7 tracking-widest uppercase">
            projects
          </h2>
        </div>
        <h1 className="text-[2.7rem] md:text-[3.5rem] lg:text-[4.7rem] xl:text-[5.2rem] font-semibold mt-[4vh] relative z-10 text-black">
          Projects
        </h1>
      </header>
      <div className="WorksDes">
        <p className="max-w-[1080px] mx-auto px-4 lg:text-center md:text-justify text-sm sm:text-base md:text-[1rem] font-light leading-relaxed cursor-default">
  I’ve worked on a variety of projects that reflect my passion for clean
  code, interactive design, and real-world problem solving. Each project
  below showcases my ability to blend front-end creativity with back-end
  logic, while leveraging modern tools and frameworks like React, Redux,
  GSAP, and more. From responsive UI/UX implementations to data-driven
  applications and AI-powered solutions, these projects demonstrate not
  only technical proficiency but also a constant drive to learn and
  innovate.
</p>

      </div>
      {/* cardMainContainer */}
      <div className="mx-auto px-4 pt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
                max-w-[600px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1080px]">

  <a href="https://github.com/LUCKYALI1/ochi-clone" className="w-full">
    <div className="bg-[#111111] text-white shadow-lg w-full h-auto rounded-[10px] overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-500 ease-in-out">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden">
        <img
          src={ochiImg}
          alt="ochiClone"
          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-4 mt-2 gap-2 sm:gap-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent">
          Ochi Clone
        </h3>
        <p className="text-xs sm:text-[0.8rem] text-white opacity-[0.8]">
          A pixel-perfect clone of the Ochi agency website built using ReactJS, Tailwind CSS, and GSAP for advanced animations.
        </p>
        <h1 className="text-sm font-semibold mt-2">Tech Used</h1>
        <div className="flex flex-wrap gap-[10px]">
          <p className="tech-tag">HTML</p>
          <p className="tech-tag">CSS</p>
          <p className="tech-tag">JavaScript</p>
          <p className="tech-tag">Reactjs</p>
          <p className="tech-tag">Tailwind</p>
          <p className="tech-tag">Gsap</p>
        </div>
      </div>
    </div>
  </a>

  <a href="https://luckyali1.github.io/Woodex/" className="w-full">
    <div className="bg-[#111111] text-white shadow-lg w-full h-auto rounded-[10px] overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-500 ease-in-out">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden">
        <img
          src={woodexImg}
          alt="Woodex"
          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-4 mt-2 gap-2 sm:gap-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent">
          Woodex - Furniture eCommerce Website
        </h3>
        <p className="text-xs sm:text-[0.8rem] text-white opacity-[0.8]">
          Woodex is a fully responsive furniture basic ecommerce website, responsive for all devices, built using HTML, CSS, and JavaScript.
        </p>
        <h1 className="text-sm font-semibold mt-2">Tech Used</h1>
        <div className="flex flex-wrap gap-[10px]">
          <p className="tech-tag">HTML</p>
          <p className="tech-tag">CSS</p>
          <p className="tech-tag">JavaScript</p>
        </div>
      </div>
    </div>
  </a>

  <a href="https://github.com/LUCKYALI1/TicTacToe" className="w-full">
    <div className="bg-[#111111] text-white shadow-lg w-full h-auto rounded-[10px] overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-500 ease-in-out">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden">
        <img
          src={TictactoeImg}
          alt="TicTacToe"
          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-4 mt-2 gap-2 sm:gap-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent">
          TicTacToe
        </h3>
        <p className="text-xs sm:text-[0.8rem] text-white opacity-[0.8]">
          Tic Tac Toe is a simple yet engaging web-based game featuring a clean, responsive UI where two players can compete in real-time.
        </p>
        <h1 className="text-sm font-semibold mt-2">Tech Used</h1>
        <div className="flex flex-wrap gap-[10px]">
          <p className="tech-tag">HTML</p>
          <p className="tech-tag">CSS</p>
          <p className="tech-tag">JavaScript</p>
          <p className="tech-tag">Reactjs</p>
          <p className="tech-tag">Tailwind</p>
        </div>
      </div>
    </div>
  </a>

  <a href="https://luckyali1.github.io/Sundown-Studio-Clone/" className="w-full">
    <div className="bg-[#111111] text-white shadow-lg w-full h-auto rounded-[10px] overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-500 ease-in-out">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden">
        <img
          src={sundownImg}
          alt="Sundown"
          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-4 mt-2 gap-2 sm:gap-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent">
          Sundown Clone
        </h3>
        <p className="text-xs sm:text-[0.8rem] text-white opacity-[0.8]">
          Developed a fully responsive clone of Sundown Studio's website using Locomotive Scroll for smooth scrolling and GSAP for animations.
        </p>
        <h1 className="text-sm font-semibold mt-2">Tech Used</h1>
        <div className="flex flex-wrap gap-[10px]">
          <p className="tech-tag">HTML</p>
          <p className="tech-tag">CSS</p>
          <p className="tech-tag">JavaScript</p>
          <p className="tech-tag">Reactjs</p>
          <p className="tech-tag">Tailwind</p>
          <p className="tech-tag">Gsap</p>
        </div>
      </div>
    </div>
  </a>

  <a href="https://github.com/LUCKYALI1/Basic-ReactJS-Projects" className="w-full">
    <div className="bg-[#111111] text-white shadow-lg w-full h-auto rounded-[10px] overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-500 ease-in-out">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden">
        <img
          src={groupofProjects}
          alt="Group of Projects"
          className="w-full h-full object-cover object-left hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col p-4 mt-2 gap-2 sm:gap-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent">
          Basic Reactjs Projects
        </h3>
        <p className="text-xs sm:text-[0.8rem] text-white opacity-[0.8]">
          A series of component-based projects in React, including dynamic routing with ReactRouter and theme switching with Context API.
        </p>
        <h1 className="text-sm font-semibold mt-2">Tech Used</h1>
        <div className="flex flex-wrap gap-[10px]">
          <p className="tech-tag">HTML</p>
          <p className="tech-tag">CSS</p>
          <p className="tech-tag">JavaScript</p>
          <p className="tech-tag">Reactjs</p>
          <p className="tech-tag">Tailwind</p>
          <p className="tech-tag">Gsap</p>
        </div>
      </div>
    </div>
  </a>

</div>

    </div>
  );
}

export default Works;

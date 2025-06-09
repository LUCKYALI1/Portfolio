import React from "react";
import '../About/about.css'
import aboutbanner from '../../assets/aboutbanner.jpg'
import avatar from '../../assets/avatar.png'

function About() {
  return (
    <div className="w-full text-black pt-[80px] overflow-hidden bg-white" id="me">
  <header className="max-w-[1080px] mx-auto px-4 text-center relative overflow-hidden mb-3">
        <div className="absolute inset-0 flex items-center justify-center sm:justify-left pointer-events-none select-none">
           <h2 className="whitespace-nowrap text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[6.5rem] font-extrabold text-black opacity-7 tracking-widest uppercase">
           About me
          </h2>
        </div>
         <h1 className="text-[2.7rem] md:text-[3.5rem] lg:text-[4.7rem] xl:text-[5.2rem] font-semibold mt-[4vh] relative z-10 text-black">
            About Me
          </h1>
      </header>
  {/* about me main container */}
  <div className="w-full bg-white min-h-[100vh]">
    {/* main center div */}
    <div className="max-w-[1080px] mx-auto flex flex-col justify-center items-center pt-4 px-4">
      <div className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] rounded-full overflow-hidden shadow-lg">
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h2 className="text-black text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] font-extrabold max-w-[700px] text-center leading-tight tracking-tight pt-4 pb-2 cursor-default">
        I'm Lucky Ali
      </h2>
    <p className="max-w-[1080px] mx-auto px-1 lg:text-left md:text-justify text-sm sm:text-base md:text-[1rem] font-light leading-relaxed cursor-default">
        A passionate CSE student specializing in AI/ML, skilled in C++, ReactJS, and building dynamic web projects.
      </p>
    </div>

    {/* mainAboutContent */}
    <div className="flex flex-col lg:flex-row max-w-[1080px] w-full mx-auto mt-8 p-4 gap-8 pb-12 px-4 sm:px-0">
      {/* Left Column */}
     <div className="lg:w-3/5 w-full flex flex-col justify-center px-2 sm:px-4 lg:px-0">
  {/* About Me Title */}
  <h2 className=" bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-extrabold mb-2 tracking-tight">
    About Me
  </h2>

  {/* About Me Text */}
  <p className="max-w-[1080px] mx-auto px-1 lg:text-left md:text-justify text-sm sm:text-base md:text-[1rem] font-light leading-relaxed cursor-default">
    <strong>I'm Lucky Ali</strong>, a <strong>highly motivated</strong> and <strong>curious learner</strong> currently pursuing a B.Tech in
    <strong> Computer Science and Engineering (AI/ML)</strong> at <strong>ABES Engineering College, Ghaziabad</strong>.
    My academic roots stem from <strong>St. Mary’s Convent School</strong> and <strong>Krishna Public School</strong>, where I completed Class 10 and 12.
    My passion for <strong>technology and intelligent systems</strong> drives me to consistently explore new fields and tackle challenges with creativity and determination.
  </p>

  {/* Skills & Interests Title */}
  <h2 className=" bg-gradient-to-r from-[#a855f7] via-[#facc15] to-[#3b82f6] bg-clip-text text-transparent text-[1.6rem] mt-4 sm:text-[1.8rem] md:text-[2rem] font-extrabold mb-2 tracking-tight">
    Skills & Interests
  </h2>

  {/* Skills Text */}
  <p className="max-w-[1080px] mx-auto px-1 lg:text-left md:text-justify text-sm sm:text-base md:text-[1rem] font-light leading-relaxed cursor-default">
    I have strong programming skills in <strong>C++</strong> and hands-on experience in modern front-end tools like <strong>ReactJS</strong>, <strong>Tailwind CSS</strong>, and <strong>GSAP</strong>.
    I’ve developed multiple responsive projects using <strong>Context API</strong>, <strong>custom hooks</strong>, and built clones like <strong>Ochi</strong> and <strong>Sundown Studio</strong>.
    I’m also exploring the field of medical AI, such as <strong>lung cancer detection using 3D CNNs</strong>. My drive lies in creating impactful, clean, and optimized solutions, whether for the web or intelligent systems.
  </p>
</div>


      {/* Right Column */}
    <div className="lg:w-2/5 w-full  max-w-[92vw] mx-auto rounded-xl overflow-hidden shadow-lg">
  <img
    src={aboutbanner}
    alt="Profile Visual"
    className="w-full h-[500px] lg:h-auto object-cover md:h-[400px]  md:object-bottom-top md:w-full object-center rounded-xl transition-all duration-300 ease-in-out"
  />
</div>



    </div>
  </div>
</div>

  );
}

export default About;

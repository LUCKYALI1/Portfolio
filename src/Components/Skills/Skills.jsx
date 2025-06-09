
import html from "../../assets/Skills/html-5.png";
import css from "../../assets/Skills/css.png";
import js from "../../assets/Skills/js.png";
import react from "../../assets/Skills/reactjs.png";
import tailwind from "../../assets/Skills/tailwind.png";
import gsapImg from "../../assets/Skills/gsap.png";
import cpp from "../../assets/Skills/cpp.png";
import python from "../../assets/Skills/python.png";
import sql from "../../assets/Skills/sql-server.png";
import github from "../../assets/Skills/github.png";
import mongo from "../../assets/Skills/mongo.png";
import React, { useEffect, useState } from "react";

function Skills() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://leetcode-api-faisalshohag.vercel.app/luckyalim_")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching LeetCode data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (!data) return <p className="text-white">No data found.</p>;

  // Calculate percentages
  const getPercent = (solved, total) => ((solved / total) * 100).toFixed(1);
  const skills = [
    { img: html, name: "HTML5" },
    { img: css, name: "CSS3" },
    { img: js, name: "JavaScript" },
    { img: react, name: "React" },
    { img: tailwind, name: "Tailwind CSS" },
    { img: github, name: "GitHub" },
    { img: gsapImg, name: "GSAP" },
    { img: mongo, name: "MongoDB" },
    { img: sql, name: "SQL Server" },
    { img: cpp, name: "C++" },
    { img: python, name: "Python" },
    // add more to reach 20 if you want full 4 rows x 5 cols
  ];

  return (
    <div className="w-full min-h-screen text-white pt-[80px] overflow-hidden bg-black pb-[3%]" id="skills">
  {/* Heading */}
  <header className="max-w-[1080px] mx-auto px-4 text-center relative overflow-hidden mb-3">
    <div className="absolute inset-0 flex items-center justify-center sm:justify-left pointer-events-none select-none">
      <h2 className="whitespace-nowrap text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[6.5rem] font-extrabold text-white opacity-7 tracking-widest uppercase">
        Skills & Expertise
      </h2>
    </div>
    <h1 className="text-[2.7rem] md:text-[3.5rem] lg:text-[4.7rem] xl:text-[5.2rem] font-semibold mt-[4vh] relative z-10 text-white">
      Skills & Expertise
    </h1>
  </header>

  {/* Paragraph */}
  <div className="max-w-[1080px] mx-auto px-4 mt-6">
    <p className="max-w-[1080px] mx-auto px-4 lg:text-center md:text-justify text-sm sm:text-base md:text-[1rem] font-light leading-relaxed cursor-default">
      I bring a diverse set of technical skills that blend creativity and functionality to build modern, efficient, and user-friendly solutions.
      From front-end development with React and animation libraries like GSAP to back-end logic with C++ and problem-solving in data structures,
      my toolkit is well-equipped to tackle real-world challenges. I'm continuously learning and evolving, always eager to explore new technologies and refine my craft.
    </p>
  </div>

  {/* Skills + LeetCode Section */}
  <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 px-4 mt-10">
    {/* Skills Grid */}
    <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map(({ img, name }, i) => (
        <div
          key={i}
          className="rounded-2xl shadow-lg flex justify-center items-center p-6 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_20px_#00ffe0]"
          title={name}
        >
          <img
            src={img}
            alt={name}
            className="w-full max-w-[60px] sm:max-w-[70px] h-auto object-cover"
          />
        </div>
      ))}
    </div>

    {/* LeetCode Section */}
    <div className="w-full lg:w-1/2 min-w-[280px]">
      <div className="p-6 text-white rounded-xl shadow-lg space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center">LeetCode Progress</h2>

        {/* Easy */}
        <div>
          <p className="mb-1 font-semibold">Easy: {data.easySolved}/{data.totalEasy} ({getPercent(data.easySolved, data.totalEasy)}%)</p>
          <div className="w-full h-4 bg-gray-700 rounded-full">
            <div className="h-4 bg-green-500 rounded-full" style={{ width: `${getPercent(data.easySolved, data.totalEasy)}%` }}></div>
          </div>
        </div>

        {/* Medium */}
        <div>
          <p className="mb-1 font-semibold">Medium: {data.mediumSolved}/{data.totalMedium} ({getPercent(data.mediumSolved, data.totalMedium)}%)</p>
          <div className="w-full h-4 bg-gray-700 rounded-full">
            <div className="h-4 bg-yellow-500 rounded-full" style={{ width: `${getPercent(data.mediumSolved, data.totalMedium)}%` }}></div>
          </div>
        </div>

        {/* Hard */}
        <div>
          <p className="mb-1 font-semibold">Hard: {data.hardSolved}/{data.totalHard} ({getPercent(data.hardSolved, data.totalHard)}%)</p>
          <div className="w-full h-4 bg-gray-700 rounded-full">
            <div className="h-4 bg-red-500 rounded-full" style={{ width: `${getPercent(data.hardSolved, data.totalHard)}%` }}></div>
          </div>
        </div>

        <p className="text-center mt-4 text-sm text-gray-300">Ranking: {data.ranking}</p>
      </div>
    </div>
  </div>

  {/* Additional Skills */}
  <div className="w-full max-w-[1080px] mb-4 mx-auto mt-10 px-4 md:px-8">
    <h1 className="text-white text-center text-2xl sm:text-3xl font-bold mb-4">
      Additional Skills
    </h1>

    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center text-white">
      Core Computer Science Concepts
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* DSA */}
      <div className="p-5 bg-opacity-10 backdrop-blur rounded-xl shadow-md text-white">
        <h3 className="text-lg font-semibold mb-2">Data Structures & Algorithms (DSA)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Proficient in arrays, linked lists, stacks, queues, trees, graphs, and heaps</li>
          <li>Familiar with binary search, sliding window, two pointers, recursion, and DP</li>
        </ul>
      </div>

      {/* OOP */}
      <div className="p-5 bg-opacity-10 backdrop-blur rounded-xl shadow-md text-white">
        <h3 className="text-lg font-semibold mb-2">Object-Oriented Programming (OOP)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Abstraction, Encapsulation, Inheritance, Polymorphism</li>
          <li>Applied in C++ and React (component-based architecture)</li>
        </ul>
      </div>

      {/* DBMS */}
      <div className="p-5 bg-opacity-10 backdrop-blur rounded-xl shadow-md text-white">
        <h3 className="text-lg font-semibold mb-2">Database Management Systems (DBMS)</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Relational DBs, SQL queries, normalization, and ACID properties</li>
          <li>Earned 2 stars in SQL</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

export default Skills;

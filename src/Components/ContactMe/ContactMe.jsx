import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import leetcode from "../../assets/LeetCode-Logo.png";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ngcyfwb",
        "template_7ascg5t",
        form.current,
        "FPBPVb-tctu-GfO4J"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message. Please try again.")
      );

    e.target.reset();
  };

  return (
    <div className="w-full bg-black text-white py-16 px-4" id="catchme">
         <header className="max-w-[1080px] mx-auto px-4 text-center relative overflow-hidden mb-3">
        <div className="absolute inset-0 flex items-center justify-center sm:justify-left pointer-events-none select-none">
           <h2 className="whitespace-nowrap text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[6.5rem] font-extrabold text-white opacity-7 tracking-widest uppercase">
            Contact me
          </h2>
        </div>
        <h1 className="text-[2.7rem] md:text-[3.5rem] lg:text-[4.7rem] xl:text-[5.2rem] font-semibold mt-[4vh] relative z-10 text-white">
          Contact me
        </h1>
      </header>
      <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row gap-10 mt-[4%]">
        {/* Left Section */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="text-[1rem] font-bold mb-6">Let's Connect</h2>
          <p className="mb-6 text-gray-300">
            I'm always open to discussing new opportunities, creative ideas or collaborations. <br />
            Drop me a message or connect through any of the platforms below!
          </p>

          <div className="flex items-center gap-6 text-3xl mb-6">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-gray-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="hover:text-gray-400 transition" />
            </a>
            <a href="https://instagram.com/yourinsta" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-400 transition" />
            </a>
            <a href="https://leetcode.com/yourleetcode" target="_blank" rel="noreferrer">
              <img
                src={leetcode}
                alt="LeetCode"
                className="w-[30px] h-[30px] object-contain hover:opacity-75 transition"
              />
            </a>
          </div>

          <p className="text-gray-500 text-sm">Email: luckyali786ashu@gmail.com</p>
        </div>

        {/* Right Section - Form */}
       <div className="md:w-1/2 w-full p-[2px] rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-400 shadow-2xl backdrop-blur-md">
  <div className="w-full h-full bg-black bg-opacity-70 rounded-2xl p-6">
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="p-3 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-xl transition duration-300"
      >
        ✉️ Send Message
      </button>
    </form>
  </div>
</div>

      </div>
    </div>
  );
};

export default ContactMe;

import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from "react-icons/fa";
import profpic from '../assets/profpic.png';
import resume from '../assets/Camarillo_Resume.pdf';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 p-8 animate-slideUp" id="hero">
      <div className="flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto">
        {/* Profile Picture */}
        <div className="w-50 h-50 rounded-full overflow-hidden shadow-2xl shadow-primary/50 hover:shadow-primary/100 group transition-all duration-500 hover:scale-95">
          <img
            src={profpic}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.20]"
          />
        </div>

        {/* Content */}
        <div className="mt-7 md:mt-0 md:ml-16 text-center md:text-left">
          <p className="text-gray-600 font-semibold">Hi! I am</p>
          <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-gray-800">
            <span className="text-primary">Edward</span> John Camarillo
          </h1>
          <p className="mt-7 text-lg text-gray-600">
            I am a passionate <span className="text-primary font-semibold">Software Developer</span> with an ability to build efficient
            and user-friendly applications. Let&apos;s build
            something amazing together!
          </p>

          {/* Buttons and Social Links */}
          <div className="mt-7 flex items-center">
            {/* Resume Button */}
            <a
              href={resume}
              download
              className="flex items-center px-5 py-3 bg-primary text-white text-md font-semibold rounded-lg shadow hover:bg-[#7CD6B0] transition duration-300"
            >
              <FaDownload className="mr-4" />
              Resume
            </a>

            {/* Social Links */}
            <div className="ml-16 flex justify-center md:justify-start space-x-10">
              <a
                href="https://github.com/EdCamarillo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/edward-john-camarillo-4b01862b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/ed.camarillo26/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

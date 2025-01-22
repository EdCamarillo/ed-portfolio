import { FaPencilRuler, FaCode, FaPalette } from "react-icons/fa";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row h-full items-center min-h-screen animate-slideUp max-w-5xl mx-auto">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-16 p-8">

        {/* Designer */}
        <div className="flex items-center space-x-5">
          <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl shrink-0">
            <FaPencilRuler />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-textMain">Designer</h3>
            <p className="text-textLight">
              I love creating clean, user-friendly designs that look great.
            </p>
          </div>
        </div>

        {/* Developer */}
        <div className="flex items-center space-x-5">
          <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl shrink-0">
            <FaCode />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-textMain">Developer</h3>
            <p className="text-textLight">
              I like to bring ideas to life through code and explore new tech.
            </p>
          </div>
        </div>

        {/* Artist */}
        <div className="flex items-center space-x-5">
          <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-full text-white text-2xl shrink-0">
            <FaPalette />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-textMain">Artist</h3>
            <p className="text-textLight">
              I enjoy creating visuals that appeal to users, even in the browser.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 bg-primary m-24 p-8 text-white rounded-xl">

        {/* Languages */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Languages</h3>
          <ul className="grid grid-cols-2 gap-y-2">
            <li>Java</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>C#</li>
            <li>C++</li>
            <li>Python</li>
            <li>Dart</li>
            <li>HTML, CSS</li>
          </ul>
        </div>

        {/* Dev Tools */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Dev Tools</h3>
          <ul className="grid grid-cols-2 gap-y-2">
            <li>Git</li>
            <li>Android Studio</li>
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>

        {/* Tech Stacks */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Tech Stacks</h3>
          <ul className="grid grid-cols-2 gap-y-2">
            <li>Angular</li>
            <li>Spring Boot</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
